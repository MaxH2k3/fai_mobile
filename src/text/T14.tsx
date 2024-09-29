import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const T14: React.FC<Props> = ({
  children,
  numberOfLines,
  style,
}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.textColor,
        textTransform: 'capitalize',
        // ...theme.fonts.textStyle_14,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default T14;
