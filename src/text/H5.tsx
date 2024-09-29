import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const H5: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{color: theme.colors.mainColor, ...theme.fonts.H5, ...style}}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H5;
