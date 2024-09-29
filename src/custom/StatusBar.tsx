import React from 'react';
import type {PropsWithChildren} from 'react';
import FlashMessage from 'react-native-flash-message';
import {View, Text, StatusBar as StatusBarRN, ViewStyle} from 'react-native';

import {theme} from '../constants';
import {statusBarHeight} from '../utils';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  containerStyle?: ViewStyle;
}>;

const StatusBar: React.FC<Props> = ({
  backgroundColor,
  barStyle,
  containerStyle,
}): JSX.Element => {
  const height = statusBarHeight();

  return (
    <React.Fragment>
      <View
        style={{
          height: height,
          backgroundColor: backgroundColor ?? theme.colors.white,
          ...containerStyle,
        }}
      >
        <StatusBarRN
          backgroundColor={theme.colors.transparent}
          barStyle={barStyle ?? 'dark-content'}
          translucent={true} // for Android StatusBar color to be transparent
        />
      </View>
      {/* <FlashMessage position='top' statusBarHeight={height} /> */}
    </React.Fragment>
  );
};

export default StatusBar;
