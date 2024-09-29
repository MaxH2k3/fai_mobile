import React, {PropsWithChildren} from 'react';
import {View, Text, ViewStyle} from 'react-native';

import {theme} from '../constants';
import {ProductType} from '../types';

type Props = PropsWithChildren<{
  gram?: boolean;
  item: ProductType;
  containerStyle?: ViewStyle;
  numberOfLines?: number;
}>;

const ProductPrice: React.FC<Props> = ({
  gram,
  item,
  containerStyle,
  numberOfLines = 1,
}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {item.old_price && (
        <Text
          style={{
            marginRight: 4,
            textDecorationLine: 'line-through',
            ...theme.fonts.Mulish_SemiBold,
            fontSize: 12,
            color: theme.colors.textColor,
            lineHeight: 12 * 1.5,
          }}
        >
          ${item.old_price}
        </Text>
      )}
      <Text
        style={{
          ...theme.fonts.Mulish_SemiBold,
          fontSize: 14,
          lineHeight: 14 * 1.5,
          color: item.old_price ? theme.colors.accent : theme.colors.mainColor,
        }}
        numberOfLines={numberOfLines}
      >
        ${item.price}
      </Text>
    </View>
  );
};

export default ProductPrice;
