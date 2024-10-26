import React from 'react';
import ChatComponent from '../components/ChatComponent';
import { custom } from '../custom';

const ChatBot: React.FC = () => {
  return (
    <custom.SmartView>
      <ChatComponent />
    </custom.SmartView>

  )
}

export default ChatBot;