import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { components } from '..';
import { useQuery } from '@tanstack/react-query';
import { IFeedback } from '../../constants/model/product-interface';
import { useFeedbacksQuery } from '../../api/query/feedback-query';
import { hooks } from '../../hooks';
import { theme } from '../../constants';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { formatDate } from '../../utils/formar-date';

interface Prop {
  productId: string;
}

const ProductReview: React.FC<Prop> = ({ productId }) => {

  const navigation = hooks.useNavigation();

  const { data, isLoading } = useQuery(
    useFeedbacksQuery({
      productId: productId,
      page: 1,
      eachPage: 5
    })
  );

  const reviews: IFeedback[] = data?.data.data || []


  if (!isLoading) {
    return (
      <View style={{ marginBottom: 20 }}>
        <components.BlockHeading
          title={`Reviews (${reviews.length})`}
          onPress={() => {
            navigation.navigate('Reviews', { productId: productId });
          }}
          containerStyle={{ marginBottom: 14, paddingHorizontal: 20 }}
        />
        {reviews.map((review, index, array) => {
          const lastItem = index === array.length - 1;
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
              key={index}
            >
              <custom.Image
                source={{ uri: review.avatar }}
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
                  <Text>{review.fullName}</Text>
                  <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
                  >
                    <svg.RatingStarSvg rating={review.rating} />
                  </View>
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
                  {formatDate(review.createdAt)}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 14 * 1.5,
                  }}
                >
                  {review.content}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
};

export default ProductReview;


