import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EmailPasswordSignin, ForgotPasswordd, ResetPassword } from '../../api/user-api';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { theme } from '../../constants';
import { components } from '../../components';
import { IForgotPasswordData, IResetPasswordData } from '../../constants/model/user-interface';
import { utils } from '../../utils';
import NewPassword from './NewPassword';

const ForgotPassword: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [step, setStep] = useState(1)

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewpassword] = useState('')

  const handleForgot = async () => {
    setLoading(true);
    const data: IForgotPasswordData = {
      email: email
    };
    const res = await ForgotPasswordd(data);
    if (res) {
      setLoading(false);
      if (res.success) {
        setStep(2)
      } else {
        utils.showMessage({
          message: res.message,
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  };

  const handleReset = async () => {
    setLoading(true);
    const data: IResetPasswordData = {
      email: email,
      otp: otp,
      password: newPassword
    };
    const res = await ResetPassword(data);
    if (res) {
      setLoading(false);
      if (res.success) {
        utils.showMessage({
          message: 'Reset password successful',
          type: 'success',
          icon: 'success'
        })
        navigation.navigate('ForgotPasswordSentEmail');
      }
      else {
        utils.showMessage({
          message: res.message,
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  };

  if (loading) {
    return <components.Loader />;
  }

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
          Please enter your email address. You will receive an OTP code to reset password
        </Text>
        <custom.InputField
          placeholder='example@gmail.com'
          label='Email'
          containerStyle={{ marginBottom: 20 }}
          onChangeText={(value) => setEmail(value)}
        />
        <components.Button
          title='send'
          onPress={handleForgot}
        />
      </KeyboardAwareScrollView>
    );
  };

  const renderStep2Content = () => {
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
          Enter new password and OTP.
        </Text>
        <custom.InputField
          placeholder='OTP...'
          label='OTP'
          containerStyle={{ marginBottom: 20 }}
          onChangeText={(value) => setOtp(value)}
        />
        <custom.InputField
          placeholder='••••••••'
          label='new password'
          secureTextEntry={true}
          eyeOffIcon={true}
          containerStyle={{ marginBottom: 20 }}
          onChangeText={(value) => setNewpassword(value)}
        />
        <components.Button
          title='change password'
          onPress={handleReset}

        />
      </KeyboardAwareScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  if (step == 1)
    return (
      <custom.SmartView>
        {renderStatusBar()}
        {renderHeader()}
        {renderContent()}
        {renderHomeIndicator()}
      </custom.SmartView>
    );

  if (step == 2)
    return (
      <custom.SmartView>
        {renderStatusBar()}
        {renderHeader()}
        {renderStep2Content()}
        {renderHomeIndicator()}
      </custom.SmartView>
    )


};

export default ForgotPassword;
