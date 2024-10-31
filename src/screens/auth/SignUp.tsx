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
import Select from '../../custom/SelectField';
import SelectField from '../../custom/SelectField';
import { IRegisterUserData, IVerifyUserData } from '../../constants/model/user-interface';
import { UserGender } from '../../constants/enum/user-enum';
import { Register, Verify } from '../../api/user-api';
import { utils } from '../../utils';

const SignUp: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [loading, setLoading] = useState(false)

  const [step, setStep] = useState(1)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Sign up' />;
  };

  if (loading) {
    return <components.Loader />;
  }

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


  const handleRegister = async () => {
    setLoading(true);
    const data: IRegisterUserData = {
      roleName: '1',
      email: email,
      password: password,
      lastName: lastName,
      firstName: firstName,
      gender: gender
    };
    const res = await Register(data);
    if (res) {
      setLoading(false);
      if (res.success) {
        setStep(2);
      } else {
        utils.showMessage({
          message: res.message || 'Something went wrong',
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    const data: IVerifyUserData = {
      email: email,
      otp: otp
    };
    const res = await Verify(data);
    if (res) {
      setLoading(false);
      if (res.success) {
        utils.showMessage({
          message: 'Register success',
          type: 'success',
          icon: 'success'
        })
        navigation.navigate('SignIn')
      }
      else {
        utils.showMessage({
          message: res.message || 'Something went wrong',
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  };

  const renderInputFields = () => {
    const options = [
      { label: 'Male', value: UserGender.MALE },
      { label: 'Female', value: UserGender.FEMALE },
      { label: 'Other', value: UserGender.UNKNOWN },
    ];
    return (
      <>
        <View style={{ paddingHorizontal: 20 }}>
          <custom.InputField
            label='First name'
            placeholder='John'
            containerStyle={{
              marginBottom: 20,
            }}
            onChangeText={(value) => setFirstName(value)}
          />
          <custom.InputField
            label='last name'
            placeholder='Doe'
            containerStyle={{
              marginBottom: 20,
            }}
            onChangeText={(value) => setLastName(value)}
          />
          <custom.InputField
            label='Email'
            placeholder='kristinwatson@mail.com'
            containerStyle={{
              marginBottom: 20,
            }}
            onChangeText={(value) => setEmail(value)}
          />
          <custom.SelectField
            label="Gender"
            placeholder="Select a gender"
            data={options}
            onValueChange={(value) => setGender(value)}
          />
          <custom.InputField
            label='Password'
            placeholder='••••••••'
            secureTextEntry={true}
            eyeOffIcon={true}
            containerStyle={{
              marginBottom: 20,
            }}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
      </>
    );
  };

  const renderOtp = () => {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <custom.InputField
          label='OTP'
          placeholder='123456'
          containerStyle={{
            marginBottom: 20,
          }}
          onChangeText={(value) => setOtp(value)}
        />
      </View>
    )
  }

  const renderButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <components.Button
          title='Sign up'
          onPress={handleRegister}
        />
      </View>
    );
  };

  const renderOtpButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <components.Button
          title='Sign up'
          onPress={handleVerify}
        />
      </View>
    )
  }

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


  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{ paddingVertical: 20, justifyContent: 'center' }}
      >
        {renderTitles()}
        {step == 1 ? (
          <>
            {renderInputFields()}
            {renderButton()}
          </>
        ) : (
          <>
            {renderOtp()}
            {renderOtpButton()}
          </>
        )}
        {renderIfDontHaveAccount()}
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
