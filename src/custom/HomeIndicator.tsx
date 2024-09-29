import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import type {PropsWithChildren} from 'react';

import {theme} from '../constants';
import {homeIndicatorHeight} from '../utils';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  containerStyle?: ViewStyle;
}>;

const HomeIndicator: React.FC<Props> = ({
  backgroundColor,
  containerStyle,
}): JSX.Element => {
  const height = homeIndicatorHeight();
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor ?? theme.colors.white,
        ...containerStyle,
      }}
    />
  );
};

export default HomeIndicator;
