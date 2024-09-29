import React from 'react';
import {Text, TouchableOpacity as TouchableOpacityRN} from 'react-native';

type Props = {
  style?: object;
  onPress?: () => void;
  activeOpacity?: number;
  children: React.ReactNode;
};

const TouchableOpacity: React.FC<Props> = ({
  onPress,
  children,
  style,
  activeOpacity,
}) => {
  return (
    <TouchableOpacityRN
      onPress={onPress}
      style={style}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacityRN>
  );
};

export default TouchableOpacity;
