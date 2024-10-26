import React, { useState } from 'react';
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
import { svg } from '../assets/svg';  // Assuming you have SVG icons here

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot'; // 'user' for the person using the app, 'bot' for automated responses (if needed)
};

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Math.random().toString(),
        text: input,
        sender: 'user',
      };

      setMessages([...messages, newMessage]);
      setInput('');

      // Optionally, add a bot response or another automated message
      setTimeout(() => {
        const botMessage: Message = {
          id: Math.random().toString(),
          text: 'This is an automated response!',
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000); // Simulates delay in bot response
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';
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
      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatList}
        inverted={true} // To keep the latest message at the bottom
      />

      {/* Input Field and Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          placeholderTextColor="#A7AFB7"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <svg.SendSvg /> {/* Assuming you have a Send icon in your svg assets */}
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
