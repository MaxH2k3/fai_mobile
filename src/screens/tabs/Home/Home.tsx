import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Platform } from 'react-native';
import { hooks } from '../../../hooks';
import { custom } from '../../../custom';
import { theme } from '../../../constants';
import { components } from '../../../components';
import { queryHooks } from '../../../store/slices/apiSlice';
import { useQuery } from '@tanstack/react-query';
import { useProductsQuery } from '../../../api/query/product-query';
import NewProduct from './NewProducts';
import BestSoldProduct from './BestSoldProduct';
import TopReviewedProduct from './TopReviewedProduct';
import { IProductMain } from '../../../constants/model/product-interface';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Home: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const topBanners = [
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/yoyhnizabcacaoxwbjwd',
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/gzi1ctuijofvb3vnensf',
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/jp3og4toctgv9e8srojc',
  ]

  const bottomBanners = [
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/nbe5yfu96t9oyf6qlcyx',
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/gybkdh4eyhkfckdbaph1',
    'https://res.cloudinary.com/dhdyel6be/image/upload/f_auto,q_auto/v1/FAI/Anothers/zv2innlarhcn55nqe8o6'
  ]


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
    return (
      <View style={{ marginBottom: 20 }}>
        <custom.ScrollView
          bounce={false}
          horizontal={true}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {topBanners.map((item, index) => {
            return (
              <custom.TouchableOpacity
                key={item}
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate('AllProductPage');
                }}
              >
                <custom.Image
                  source={{ uri: item }}
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
  };

  const renderBottomCarousel = () => {
    return (
      <View style={{ marginBottom: 20 }}>
        <custom.ScrollView
          bounce={false}
          horizontal={true}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {bottomBanners.map((item, index) => {
            return (
              <custom.TouchableOpacity
                key={item}
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate('AllProductPage');
                }}
              >
                <custom.Image
                  source={{ uri: item }}
                  style={{
                    width: theme.sizes.width,
                    height: responsiveHeight(6.7)
                  }}
                  resizeMode='contain'
                />
              </custom.TouchableOpacity>
            );
          })}
        </custom.ScrollView>
      </View>
    );
  };

  const renderIndicator = () => {
    if (topBanners.length > 0) {
      return (
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          {topBanners.map((item, index) => {
            return (
              <View
                key={item}
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
        {renderBottomCarousel()}
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
