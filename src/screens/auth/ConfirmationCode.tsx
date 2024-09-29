import React from 'react';
import ParsedText from 'react-native-parsed-text';
import {View, TextInput, ViewStyle} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const ConfirmationCode: React.FC = (): JSX.Element => {
  const navigation = hooks.useNavigation();

  const inputStyle: object = {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    fontSize: 20,
    borderRadius: responsiveWidth(15) / 2,
    ...theme.fonts.Mulish_Regular,
    color: theme.colors.mainColor,
  };

  const inputContainerStyle: ViewStyle = {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderWidth: 1,
    borderRadius: responsiveWidth(15) / 2,
    borderColor: theme.colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header title='Verify your phone number' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{paddingVertical: 25, paddingHorizontal: 20}}
      >
        <text.T16 style={{marginBottom: 20}}>
          Enter your OTP code here.
        </text.T16>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{...inputContainerStyle}}>
            <TextInput
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
            />
          </View>
          <View style={{...inputContainerStyle}}>
            <TextInput
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
            />
          </View>
          <View style={{...inputContainerStyle}}>
            <TextInput
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
            />
          </View>
          <View style={{...inputContainerStyle}}>
            <TextInput
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
            />
          </View>
          <View style={{...inputContainerStyle}}>
            <TextInput
              maxLength={1}
              style={{...inputStyle}}
              keyboardType='number-pad'
            />
          </View>
        </View>
        <ParsedText
          style={{
            // ...theme.fonts.DMSans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 30,
          }}
          parse={[
            {
              pattern: /Resend./,
              style: {color: theme.colors.mainColor},
              onPress: () => console.log('Pressed Resend'),
            },
          ]}
        >
          Did not receive the OTP? Resend.
        </ParsedText>
        <components.Button
          title='verify'
          onPress={() => {
            navigation.navigate('SignUpAccountCreated');
          }}
        />
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

export default ConfirmationCode;
