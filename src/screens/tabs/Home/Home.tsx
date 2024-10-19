import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Platform } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import FlashMessage from 'react-native-flash-message';

import { hooks } from '../../../hooks';
import { custom } from '../../../custom';
import { theme } from '../../../constants';
import { components } from '../../../components';

import { queryHooks } from '../../../store/slices/apiSlice';

import { statusBarHeight } from '../../../utils';
import { useQuery } from '@tanstack/react-query';
import { useProductsQuery } from '../../../api/query/product-query';
import { ProductAPIEnum } from '../../../constants/enum/product-enum';
import NewProduct from './NewProducts';
import BestSoldProduct from './BestSoldProduct';
import TopReviewedProduct from './TopReviewedProduct';
import { IProductMain } from '../../../constants/model/product-interface';

const Home: React.FC = () => {
  const navigation = hooks.useNavigation();

  const {
    data: carouselData
  } = queryHooks.useGetCarouselQuery();

  const carousel = carouselData instanceof Array ? carouselData : [];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { data, isLoading } = useQuery(
    useProductsQuery({
      Page: 1,
      EachPage: 100,
    })
  );

  const products: IProductMain[] = data?.data.data || [];

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderFlashMessage = () => {
    return <components.FlashMessage />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        logo={true}
        burger={true}
        basket={true}
        bottomLine={true}
      />
    );
  };

  const renderCarousel = () => {
    if (carousel.length > 0) {
      return (
        <View style={{ marginBottom: carousel.length > 0 ? 20 : 40 }}>
          <custom.ScrollView
            bounce={false}
            horizontal={true}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={updateCurrentSlideIndex}
          >
            {carousel.map((item, index) => {
              return (
                <custom.TouchableOpacity
                  key={item.id}
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.navigate('ProductList', {
                      title: 'All product',
                      products: products,
                    });
                  }}
                >
                  <custom.Image
                    source={{ uri: item.image }}
                    style={{
                      width: theme.sizes.width,
                      aspectRatio: 375 / 300,
                    }}
                  />
                </custom.TouchableOpacity>
              );
            })}
          </custom.ScrollView>
        </View>
      );
    }

    return null;
  };

  const renderIndicator = () => {
    if (carousel.length > 0) {
      return (
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          {carousel.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: currentSlideIndex === index ? 22 : 6,
                  height: currentSlideIndex === index ? 8 : 6,
                  borderWidth: 2,
                  borderColor: theme.colors.mainColor,
                  borderRadius: 4,
                  backgroundColor:
                    currentSlideIndex === index
                      ? theme.colors.transparent
                      : theme.colors.mainColor,
                  marginHorizontal: 5,
                }}
              />
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderIndicator()}
        <NewProduct />
        <BestSoldProduct />
        <TopReviewedProduct />
      </ScrollView>
    )
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderFlashMessage()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Home;
