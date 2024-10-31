import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { text } from '../text';
import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { components } from '../components';

const OrderFailed: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header logo={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          paddingTop: 40,
          paddingBottom: 20,
        }}
      >
        <View style={{ alignSelf: 'center', marginBottom: 20 }}>
          <svg.FailSvg />
        </View>

        <components.Line style={{ marginBottom: 14 }} />
        <text.H2 style={{ textAlign: 'center', marginBottom: 14 }}>
          Sorry! Your order has failed!
        </text.H2>
        <Text
          style={{
            marginBottom: 30,
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            textAlign: 'center',
            color: theme.colors.textColor,
          }}
        >
          Something went wrong. Please try {'\n'} again to contimue your order.
        </Text>
        <components.Button
          title='try again'
          onPress={() => { navigation.navigate('TabNavigator') }}
          containerStyle={{ marginBottom: 10 }}
        />
        <components.Button
          title='go to my profile'
          transparent={true}
          onPress={() => { }}
        />
      </ScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default OrderFailed;
