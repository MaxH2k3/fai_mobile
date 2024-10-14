import React, { useState } from 'react';
import ParsedText from 'react-native-parsed-text';
import { View, Text, TouchableOpacity } from 'react-native';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { actions } from '../../store/actions';
import { components } from '../../components';

const SignIn: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Sign in' />;
  };

  const renderTitles = () => {
    return (
      <View>
        {/* <components.Line style={{ marginBottom: 14 }} /> */}
        <custom.Image
          source={require('../../assets/cooler-fai-logo.png')}
          style={{ width: 60, height: 33, alignSelf: 'center', marginBottom: 14 }}
        />
        <text.H1 style={{ textAlign: 'center', marginBottom: 14 }}>
          Welcome Back!
        </text.H1>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            textAlign: 'center',
            color: theme.colors.textColor,
            lineHeight: 16 * 1.7,
            marginBottom: 40,
          }}
        >
          Sign in to continue
        </Text>
      </View>
    );
  };

  const renderInputFields = () => {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <custom.InputField
          label='Email'
          placeholder='kristinwatson@mail.com'
          containerStyle={{
            marginBottom: 20,
          }}
          checkIcon={true}
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
      </View>
    );
  };

  const renderAdditionalButtons = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 2,
              borderRadius: 5,
              borderColor: theme.colors.lightBlue,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {rememberMe && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: theme.colors.lightBlue,
                  borderRadius: 2,
                }}
              />
            )}
          </View>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              marginLeft: 12,
              color: theme.colors.textColor,
            }}
          >
            Remember me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              color: theme.colors.mainColor,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <components.Button
          title='Sign in'
          onPress={() => {
            dispatch(actions.setRefreshToken('refreshToken'));
            dispatch(actions.setAccessToken('accessToken'));
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
              pattern: /Sign up./,
              style: { color: theme.colors.mainColor },
              onPress: () => navigation.navigate('SignUp'),
            },
          ]}
        >
          Don’t have an account? Sign up.
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
        {renderAdditionalButtons()}
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

export default SignIn;
