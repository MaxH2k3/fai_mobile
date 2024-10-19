import React, { useState } from 'react';
import ParsedText from 'react-native-parsed-text';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { actions } from '../../store/actions';
import { components } from '../../components';
import { ILoginUserData } from '../../constants/model/user-interface';
import { EmailPasswordSignin } from '../../api/user-api';
import { utils } from '../../utils';
import { Token, User } from '../../constants/enum/storage-enum';
import { storeData } from '../../utils/storage-utils';
import { queryHooks } from '../../store/slices/apiSlice';
import { setScreen } from '../../store/slices/tabSlice';

const SignIn: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  if (loading) {
    return <components.Loader />;
  }

  const HandleLogin = async () => {
    setLoading(true)
    const data: ILoginUserData = {
      email: email,
      password: password
    }

    const res = await EmailPasswordSignin(data)

    if (res) {
      setLoading(false)
      if (res.success) {

        utils.showMessage({
          message: 'Login successful',
          type: 'success',
          icon: 'success'
        })
        storeData(Token.JWT_TOKEN, res.data.data.token)
        dispatch(actions.setAccessToken(res.data.data.token))
        dispatch(actions.setRole(res.data.data.roleName))
        dispatch(actions.setUserName(res.data.data.lastName + " " + res.data.data.firstName))
        dispatch(actions.setEmail(res.data.data.email))
        dispatch(actions.setUser(res.data.data))

        dispatch(setScreen('Home'))
        navigation.navigate('TabNavigator')

      } else {
        utils.showMessage({
          message: res.message,
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Sign in' />;
  };

  const renderTitles = () => {
    return (
      <View>
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
          placeholder='example@mail.com'
          containerStyle={{
            marginBottom: 20,
          }}
          value={email}
          checkIcon={true}
          onChangeText={(value) => setEmail(value)}
        />
        <custom.InputField
          label='Password'
          placeholder='••••••••'
          secureTextEntry={true}
          eyeOffIcon={true}
          value={password}
          containerStyle={{
            marginBottom: 20,
          }}
          onChangeText={(value) => setPassword(value)}
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
          onPress={HandleLogin}
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
