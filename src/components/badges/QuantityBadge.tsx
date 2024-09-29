import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

type Props = {
  version: number;
  quantity: number;
};

import {text} from '../../text';

const QuantityBadge: React.FC<Props> = ({
  version,
  quantity,
}): JSX.Element | null => {
  const {T14} = text;

  const blockStyles: object = {
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderColor: theme.colors.lightBlue,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
  };

  if (version === 1) {
    return (
      <View
        style={{
          ...blockStyles,
          paddingHorizontal: 3,
        }}
      >
        <Text
          style={{
            fontSize: 8,
            textTransform: 'uppercase',
            lineHeight: 8 * 1.5,
            color: theme.colors.textColor,
            // ...theme.fonts.DMSans_400Regular,
          }}
        >
          {quantity}
        </Text>
      </View>
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          ...blockStyles,
          paddingVertical: 1,
          paddingHorizontal: 8,
        }}
      >
        <T14>{quantity}</T14>
      </View>
    );
  }

  return null;
};

export default QuantityBadge;
