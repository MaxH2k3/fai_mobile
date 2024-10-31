import React from 'react';
import ChatComponent from './ChatComponent';
import { custom } from '../custom';
import { components } from '../components';


const renderStatusBar = () => {
  return <custom.StatusBar />;
};

const renderHeader = () => {
  return <components.Header goBack={true} title='Chat' />;
};

const renderHomeIndicator = () => {
  return <custom.HomeIndicator />;
};

const ChatBot: React.FC = () => {
  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      <ChatComponent />
      {renderHomeIndicator()}
    </custom.SmartView>

  )
}

export default ChatBot;