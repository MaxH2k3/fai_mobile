import {View, ViewStyle} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}>;

import {theme} from '../constants';

const SmartView: React.FC<Props> = ({
  children,
  containerStyle,
}): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: containerStyle?.backgroundColor ?? theme.colors.white,
        ...containerStyle,
      }}
    >
      {children}
    </View>
  );
};

export default SmartView;
