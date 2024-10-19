import { View, Text, ViewStyle } from 'react-native';
import React from 'react';

import { svg } from '../assets/svg';
import { theme } from '../constants';
import { ProductType } from '../types';

type Props = {
  item: ProductType;
  containerStyle?: ViewStyle;
  value?: number;
  single?: boolean;
};

const ProductRating: React.FC<Props> = ({
  item,
  containerStyle,
  value,
  single,
}) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', ...containerStyle }}
    >
      <svg.RatingSvg item={item} />
      {item && value && !single && (
        <Text
          style={{
            marginLeft: 4,
            ...theme.fonts.Mulish_Regular,
            fontSize: 12,
            lineHeight: 12 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          ({item && value ? value : item.rating})
        </Text>
      )}
      {item && !value && !single && (
        <Text
          style={{
            marginLeft: 4,
            ...theme.fonts.Mulish_Regular,
            fontSize: 12,
            lineHeight: 12 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          ({item.rating})
        </Text>
      )}
    </View>
  );
};

export default ProductRating;
