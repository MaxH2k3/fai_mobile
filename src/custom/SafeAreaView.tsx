import {View, Text} from 'react-native';
import React from 'react';

import SmartView from './SmartView';
import StatusBar from './StatusBar';
import HomeIndicator from './HomeIndicator';

type Props = {
  children?: React.ReactNode;
};

const SafeAreaView: React.FC<Props> = ({children}) => {
  const renderStatusBar = () => {
    return <StatusBar />;
  };

  const renderHomeIndicator = () => {
    return <HomeIndicator />;
  };

  return (
    <SmartView>
      {renderStatusBar()}
      {children}
      {renderHomeIndicator()}
    </SmartView>
  );
};

export default SafeAreaView;
