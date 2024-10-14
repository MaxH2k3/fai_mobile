import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { theme } from '../constants';
import { svg } from '../assets/svg';

type Props = {
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string;
  check?: boolean;
  label?: string;
  blurOnSubmit?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean;
  icon?: JSX.Element;
  innerRef?: any;
  maxLength?: number;
};

const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  eyeOffIcon = false,
  onChangeText,
  blurOnSubmit,
  label,
  value,
  icon,
  innerRef,
  maxLength,
}): JSX.Element | null => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View
      style={{
        height: 50,
        borderColor: theme.colors.lightBlue,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderRadius: 25,
        ...containerStyle,
      }}
    >
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -11,
            left: 20,
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
            {label}
          </Text>
        </View>
      )}
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          marginLeft: 30,
          color: theme.colors.mainColor,
          // ...theme.fonts.DMSans_400Regular,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry && !showPassword}
        onChangeText={onChangeText}
        value={value}
        ref={innerRef}
        blurOnSubmit={blurOnSubmit}
        maxLength={maxLength}
      />

      {checkIcon && (
        <View style={{ paddingHorizontal: 20 }}>
          <svg.CheckSvg />
        </View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={handleShowPassword}>
          {showPassword ? (
            <svg.EyeOpenSvg />
          ) : (
            <svg.EyeOffSvg />
          )}
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
