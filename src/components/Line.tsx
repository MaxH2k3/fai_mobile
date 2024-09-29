import React from 'react';
import {View, ViewStyle} from 'react-native';

import {theme} from '../constants';

type Props = {style?: ViewStyle};

const Line: React.FC<Props> = ({style}): JSX.Element => {
  return (
    <View
      style={{
        width: 1,
        height: 30,
        alignSelf: 'center',
        backgroundColor: theme.colors.mainColor,
        ...style,
      }}
    />
  );
};

export default Line;
