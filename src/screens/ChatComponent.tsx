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

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const ChatComponent: React.FC = () => {

  const user = hooks.useSelector((state) => state.appState.user);

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageToSend, setMessageToSend] = useState<string>('')
  const [connection, setConnection] = useState<HubConnection | null>(null);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const setupConnection = async () => {
      const res = await connectToSignalR(user!.token, 'chat');
      if (res) {
        res.serverTimeoutInMilliseconds = 1000 * 60000;
        res.keepAliveIntervalInMilliseconds = 1000 * 10;
        setConnection(res);
      }
      res?.on("SendMessage", (message: string) => {
        const botMessage: Message = {
          id: Math.random().toString(),
          text: message,
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      });

      return () => {
        if (connection) {
          connection.stop().then(() => {
            console.log("Connection closed.");
            setConnection(null);
          }).catch((err) => console.error("Error closing connection:", err));
        }
      };
    };
    if (!connection && user)
      setupConnection();
  }, [connection]);

  const SendMessage = () => {
    setLoading(true)
    if (messageToSend.trim()) {
      const newMessage: Message = {
        id: Math.random().toString(),
        text: messageToSend,
        sender: 'user',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    const date = new Date();
    if (connection) {
      connection.invoke('ChatBOT', date.toISOString(), `${messageToSend}`)
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

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';
    flatListRef.current?.scrollToEnd({ animated: true });
    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
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
        <TouchableOpacity style={styles.sendButton} onPress={SendMessage} disabled={loading || messageToSend.trim() == '' || !connection}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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

export default ChatComponent;
