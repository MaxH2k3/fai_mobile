import React, { useState } from 'react';
import ParsedText from 'react-native-parsed-text';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { components } from '../../components';

const SignUp: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Sign up' />;
  };

  const renderTitles = () => {
    return (
      <View>
        <custom.Image
          source={require('../../assets/cooler-fai-logo.png')}
          style={{ width: 60, height: 33, alignSelf: 'center', marginBottom: 14 }}
        />
        <text.H1 style={{ textAlign: 'center', marginBottom: 40 }}>
          Sign up
        </text.H1>
      </View>
    );
  };

  const renderInputFields = () => {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <custom.InputField
          label='name'
          placeholder='Kristin Watson'
          containerStyle={{
            marginBottom: 20,
          }}
          checkIcon={true}
        />
        <custom.InputField
          label='Email'
          placeholder='kristinwatson@mail.com'
          secureTextEntry={true}
          checkIcon={true}
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <custom.InputField
          label='Password'
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <custom.InputField
          label='confirm password'
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
          containerStyle={{
            marginBottom: 20,
          }}
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <components.Button
          title='Sign up'
          onPress={() => {
            navigation.navigate('VerifyYourPhoneNumber');
          }}
        />
      </View>
    );
  };

  const renderIfDontHaveAccount = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
        <ParsedText
          style={{
            ...theme.fonts.Mulish_Regular,
            color: theme.colors.textColor,
            fontSize: 16,
            lineHeight: 16 * 1.7,
          }}
          parse={[
            {
              pattern: /Sign in./,
              style: { color: theme.colors.mainColor },
              onPress: () => navigation.navigate('SignIn'),
            },
          ]}
        >
          Already have an account? Sign in.
        </ParsedText>
      </View>
    );
  };

  const renderSocials = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <View style={{ paddingHorizontal: 5 }}>
          <svg.FacebookSvg />
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <svg.GoogleSvg />
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{ paddingVertical: 20, justifyContent: 'center' }}
      >
        {renderTitles()}
        {renderInputFields()}
        {renderButton()}
        {renderIfDontHaveAccount()}
        {renderSocials()}
      </components.KAScrollView>
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

export default SignUp;
