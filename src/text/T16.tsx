import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const T16: React.FC<Props> = ({children, style, numberOfLines}) => {
  return (
    <Text
      style={{
        // ...theme.fonts.DMSans_400Regular,
        fontSize: 16,
        lineHeight: 16 * 1.7,
        color: theme.colors.textColor,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default T16;
