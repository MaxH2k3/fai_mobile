import React from 'react';
import {View, Text} from 'react-native';
import PhoneInput from 'react-native-phone-input';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const VerifyYourPhoneNumber: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Sign up' />;
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 30}}
      >
        <text.T16 style={{marginBottom: 40}}>
          We have sent you an SMS with a code to number +17 0123456789.
        </text.T16>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#DBE9F5',
            marginBottom: 20,
          }}
        >
          <PhoneInput
            style={{
              paddingVertical: 16,
              paddingHorizontal: 25,
            }}
            initialCountry={'us'}
            textStyle={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 16,
              color: theme.colors.mainColor,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -12,
              left: 13,
              paddingHorizontal: 10,
              backgroundColor: theme.colors.white,
            }}
          >
            <Text
              style={{
                ...theme.fonts.Mulish_SemiBold,
                fontSize: 12,
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                lineHeight: 12 * 1.7,
              }}
            >
              phone number
            </Text>
          </View>
        </View>
        <components.Button
          title='confirm'
          onPress={() => navigation.navigate('ConfirmationCode')}
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

export default VerifyYourPhoneNumber;
