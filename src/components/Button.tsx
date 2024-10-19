import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';

import { theme } from '../constants';

type Props = {
  title: string;
  onPress?: () => void;
  containerStyle?: object;
  transparent?: boolean;
  disabled?: boolean
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  containerStyle,
  transparent = false,
  disabled
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderColor: theme.colors.textColor,
        backgroundColor: transparent ? '#FAFCFE' : disabled ? 'gray' : theme.colors.mainColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}
      disabled={disabled || false}
    >
      <Text
        style={{
          color: transparent ? theme.colors.mainColor : theme.colors.white,
          textTransform: 'uppercase',
          ...theme.fonts.Mulish_SemiBold,
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
