import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

import { theme } from '../constants';

type Props = {
  label: string;
  containerStyle?: object;
  onChange?: (text: string) => void;
  value: string
  placeholder?: string
};

const InputFieldBig: React.FC<Props> = ({
  containerStyle,
  label,
  onChange,
  value,
  placeholder
}): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        height: 131,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.colors.lightBlue,
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 24,
          paddingTop: 23,
          paddingBottom: 23,
          color: theme.colors.mainColor,
          fontSize: 16,
        }}
        placeholder={placeholder}
        textAlignVertical='top'
        multiline={true}
        placeholderTextColor='#A8BCCC'
        onChangeText={onChange}
        value={value}
      />
      {label && (
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
    </View>
  );
};

export default InputFieldBig;
