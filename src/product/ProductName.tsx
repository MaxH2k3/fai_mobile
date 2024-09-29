import React from 'react';
import {Text, TextStyle} from 'react-native';

import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {item: ProductType; style?: TextStyle};

const ProductName: React.FC<Props> = ({item, style}): JSX.Element | null => {
  return (
    <Text
      style={{
        marginRight: 'auto',
        ...theme.fonts.Mulish_Regular,
        fontSize: 14,
        lineHeight: 14 * 1.7,
        color: theme.colors.textColor,
        ...style,
      }}
      numberOfLines={1}
    >
      {item.name}
    </Text>
  );
  return null;
};

export default ProductName;
