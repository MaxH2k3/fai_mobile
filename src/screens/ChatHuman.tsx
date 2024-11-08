import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { theme } from '../constants';
import { HubConnection } from '@microsoft/signalr';
import { svg } from '../assets/svg';
import connectToSignalR from '../utils/signal-r-connect';
import { hooks } from '../hooks';
import { utils } from '../utils';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { custom } from '../custom';
import { components } from '../components';
import { useQuery } from '@tanstack/react-query';
import { useChatHistory } from '../api/query/chat-query';

type Message = {
  messageId: number
  content: string;
  sender: string
};

interface Data {
  messageId: number
  content: string
  sender: string
  chatId: string
  createdAt: string
}

interface SocketResponse {
  statusResponse: boolean;
  message: string;
  data: string | Data | null;
}

type Props = NativeStackScreenProps<RootStackParamList, 'ChatHuman'>;

const ChatHuman: React.FC<Props> = ({ route }) => {

  const { brandId } = route.params

  const user = hooks.useSelector((state) => state.appState.user);

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState<string>('')
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [chatId, setChatId] = useState('')

  const flatListRef = useRef<FlatList>(null);

  const { data, isLoading } = useQuery(
    useChatHistory({
      chatId: chatId,
      page: 1,
      eachPage: 15
    })
  );

  const chatMessages: Message[] = data?.data.data || []

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Chat' />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };


  useEffect(() => {
    if (data && !isLoading && messages.length == 0) {
      const reverseList = chatMessages.reverse()
      setMessages(reverseList)
    }
  }, [data, isLoading])

  useEffect(() => {
    const setupConnection = async () => {
      const res = await connectToSignalR(user!.token, 'chat');
      if (res) {
        res.serverTimeoutInMilliseconds = 1000 * 60000;
        res.keepAliveIntervalInMilliseconds = 1000 * 10;
        setConnection(res);
      }

      res?.on('SendChat', (res: SocketResponse) => {
        if (res.statusResponse && typeof res.data === 'string') {
          setChatId(res.data)
        } else if (res.statusResponse && typeof res.data !== 'string') {
          const botMessage: Message = {
            messageId: res.data?.messageId as number,
            content: res.data?.content as string,
            sender: res.data?.sender as string,
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          utils.showMessage({
            message: res.message || 'Cannot connect to chat',
            type: 'danger',
            icon: 'danger'
          })
        }
      });

      // res?.on('SendNewChatId', (res: SocketResponse) => {
      //   if (res.statusResponse) {
      //     setChatId(res.data)
      //   } else {
      //     utils.showMessage({
      //       message: res.message || 'Cannot connect to chat',
      //       type: 'danger',
      //       icon: 'danger'
      //     })
      //   }
      // })

      return () => {
        if (connection) {
          connection.stop().then(() => {
            console.log("Connection closed.");
            setConnection(null);
          }).catch((err) => console.error("Error closing connection:", err));
        }
      };
    };

    if (!connection && user) {
      setupConnection();
    }

  }, [connection]);

  useEffect(() => {
    if (connection) {
      connection.invoke('JoinChat', `${brandId}`)
        .catch((err: any) => {
          utils.showMessage({
            message: 'Join chat failed',
            type: 'danger',
            icon: 'danger'
          })
        });
    }
  }, [connection])


  const SendMessage = () => {
    setLoading(true)
    if (connection && chatId !== '') {
      connection.invoke('Chat', `${chatId}`, `${messageToSend}`)
        .then(() => {
          setLoading(false)
          setMessageToSend('')
        })
        .catch((err: any) => {
          utils.showMessage({
            message: 'Send message failed',
            type: 'danger',
            icon: 'danger'
          })
        });
    } else {
      utils.showMessage({
        message: 'Cannot connect to chat right now',
        type: 'danger',
        icon: 'danger'
      })
    }
  };

  if (isLoading || !connection) {
    return (
      <custom.SmartView>
        {renderStatusBar()}
        {renderHeader()}
        <components.Loader />
      </custom.SmartView>
    )
  }


  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender !== brandId;
    flatListRef.current?.scrollToEnd({ animated: true });
    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.content}</Text>
      </View>
    );
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.messageId.toString()}
          renderItem={renderMessage}
          contentContainerStyle={styles.chatList}
          inverted={false}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={messageToSend}
            onChangeText={(value) => setMessageToSend(value)}
            placeholder="Type a message..."
            placeholderTextColor="#A7AFB7"
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={SendMessage}
            disabled={loading || messageToSend.trim() == '' || !connection || chatId == ''}>
            {loading || !connection || chatId == '' ? (
              <Text>Loading</Text>
            ) : (
              <Text>Send</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  chatList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 8,
    borderRadius: 12,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.lightBlue,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
  },
  messageText: {
    fontSize: 16,
    color: theme.colors.textColor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#A7AFB7',
    borderRadius: 20,
    color: theme.colors.textColor,
    backgroundColor: theme.colors.white,
  },
  sendButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 20,
  },
});

export default ChatHuman;
