import { View, Text } from 'react-native';
import React from 'react';

import { custom } from '../../custom';
import { product } from '../../product';
import { ReviewType, ProductType } from '../../types';
import { theme } from '../../constants';

type Props = {
  review: ReviewType;
  item: ProductType;
  lastItem: boolean;
};

const ReviewItem: React.FC<Props> = ({ review, item, lastItem }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: lastItem ? 0 : 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: lastItem
          ? theme.colors.transparent
          : theme.colors.lightBlue,
      }}
    >
      <custom.Image
        source={{ uri: review.image }}
        style={{
          width: 50,
          height: 50,
          marginRight: 14,
        }}
        imageStyle={{
          borderRadius: 50 / 2,
        }}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
            justifyContent: 'space-between',
          }}
        >
          <Text>{review.name}</Text>
          <product.ProductRating item={item} single={true} />
        </View>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 10,
            color: theme.colors.textColor,
            lineHeight: 10 * 1.5,
            marginBottom: 5,
          }}
        >
          {review.date}
        </Text>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            color: theme.colors.textColor,
            lineHeight: 14 * 1.5,
          }}
        >
          {review.comment}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;
