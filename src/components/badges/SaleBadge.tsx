import React from 'react';
import {View, Text} from 'react-native';

import {theme} from '../../constants';
import {ProductType} from '../../types';

type Props = {item: ProductType; containerStyle?: object};

const SaleBadge: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element | null => {
  if (item.old_price) {
    return (
      <View
        style={{
          backgroundColor: theme.colors.khakiGreen,
          alignSelf: 'flex-start',
          paddingHorizontal: 6,
          paddingVertical: 4,
          ...containerStyle,
        }}
      >
        <Text
          style={{
            ...theme.fonts.Mulish_Bold,
            fontSize: 8,
            textTransform: 'uppercase',
            color: theme.colors.white,
          }}
        >
          Sale
        </Text>
      </View>
    );
  }

  return null;
};

export default SaleBadge;
