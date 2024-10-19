import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { components } from '../../components';

const ForgotPasswordSentEmail: React.FC = () => {
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
          <svg.KeySvg />
        </View>

        <components.Line style={{ marginBottom: 14 }} />
        <text.H2 style={{ textAlign: 'center', marginBottom: 14 }}>
          Your password has{'\n'}been reset!
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
          Password changed navigate to the sign in page
        </Text>
        <components.Button
          title='done'
          onPress={() => {
            navigation.navigate('SignIn');
          }}
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

export default ForgotPasswordSentEmail;
