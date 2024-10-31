import { View, Text } from 'react-native';
import React from 'react';

import { custom } from '../custom';
import { reviews, theme } from '../constants';
import { components } from '../components';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { useFeedbacksQuery } from '../api/query/feedback-query';
import { IFeedback, IProductFeedbackResponse } from '../constants/model/product-interface';
import { svg } from '../assets/svg';
import { formatDate } from '../utils/formar-date';


type Props = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

const Reviews: React.FC<Props> = ({ route }) => {

  const { productId } = route.params

  const { data, isLoading } = useQuery(
    useFeedbacksQuery({
      productId: productId,
      page: 1,
      eachPage: 100
    })
  );

  const reviews: IProductFeedbackResponse = data?.data.data || null

  if (isLoading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reviews' />;
  };

  const renderContent = () => {
    return (
      <>
        {reviews.feedbacks.map((review, index, array) => {
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
      </>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Reviews;
