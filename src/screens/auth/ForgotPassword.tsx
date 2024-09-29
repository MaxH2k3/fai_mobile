import React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const ForgotPassword: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Forgot password' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 30,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
        enableOnAndroid={true}
      >
        <Text
          style={{
            marginBottom: 40,
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <custom.InputField
          placeholder='kristinwatson@mail.com'
          label='Email'
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title='send'
          onPress={() => {
            navigation.navigate('NewPassword');
          }}
        />
      </KeyboardAwareScrollView>
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

export default ForgotPassword;
