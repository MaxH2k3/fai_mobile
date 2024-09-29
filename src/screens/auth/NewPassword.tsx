import React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const NewPassword: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reset password' />;
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
          Enter new password and confirm.
        </Text>
        <custom.InputField
          placeholder='••••••••'
          label='new password'
          secureTextEntry={true}
          eyeOffIcon={true}
          containerStyle={{marginBottom: 20}}
        />
        <custom.InputField
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
          label='confirm password'
          containerStyle={{marginBottom: 20}}
        />
        <components.Button
          title='change password'
          onPress={() => {
            navigation.navigate('ForgotPasswordSentEmail');
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

export default NewPassword;
