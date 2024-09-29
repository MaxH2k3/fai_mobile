import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList, Platform} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import FlashMessage from 'react-native-flash-message';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

import {queryHooks} from '../../store/slices/apiSlice';

import {statusBarHeight} from '../../utils';

const Home: React.FC = () => {
  const navigation = hooks.useNavigation();

  const height = statusBarHeight();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = queryHooks.useGetProductsQuery();

  const {
    data: bestSellersData,
    error: bestSellersError,
    isLoading: bestSellersLoading,
  } = queryHooks.useGetProductBestSellerQuery();

  const {
    data: carouselData,
    error: carouselError,
    isLoading: carouselLoading,
  } = queryHooks.useGetCarouselQuery();

  const {
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
  } = queryHooks.useGetBannersQuery();

  const products = productsData instanceof Array ? productsData : [];
  const bestSellers = products?.filter((e) => e.is_best_seller) ?? [];
  const featured = products?.filter((e) => e.is_featured) ?? [];
  const carousel = carouselData instanceof Array ? carouselData : [];
  const banners = bannersData instanceof Array ? bannersData : [];
  const test = bestSellersData?.products ?? [];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
        <View style={{marginBottom: carousel.length > 0 ? 20 : 40}}>
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
                    navigation.navigate('Shop', {
                      title: 'Shop',
                      products: products,
                    });
                  }}
                >
                  <custom.Image
                    source={{uri: item.image}}
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

  const renderBestSellers = () => {
    const slice = bestSellers?.slice(0, 12);

    if (bestSellers.length > 0) {
      return (
        <View style={{marginBottom: 30}}>
          <components.BlockHeading
            title='Best sellers'
            onPress={() => {
              navigation.navigate('Shop', {
                title: 'Best sellers',
                products: bestSellers,
              });
            }}
            containerStyle={{marginHorizontal: 20, marginBottom: 14}}
          />
          <FlatList
            data={slice}
            horizontal={true}
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            snapToInterval={theme.sizes.width - responsiveWidth(46.2)}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
            pagingEnabled={Platform.OS === 'ios' ? true : false}
            renderItem={({item, index}) => {
              const lastItem = index === slice.length - 1;
              return (
                <components.BestSellerItem item={item} lastItem={lastItem} />
              );
            }}
          />
        </View>
      );
    }

    return null;
  };

  const renderBanner = () => {
    const banner = banners[0];

    const onPress = () => {
      navigation.navigate('Shop', {
        title: 'Shop',
        products: products,
      });
    };
    return (
      <custom.TouchableOpacity style={{marginBottom: 40}} onPress={onPress}>
        <custom.Image
          source={{uri: banner?.image}}
          style={{
            width: theme.sizes.width,
            aspectRatio: 375 / 150,
          }}
        />
      </custom.TouchableOpacity>
    );
  };

  const renderFeatured = () => {
    const slice = featured?.slice(0, 12);

    const onPress = () => {
      navigation.navigate('Shop', {
        title: 'Featured products',
        products: featured,
      });
    };

    if (featured.length > 0) {
      return (
        <View style={{marginBottom: 30}}>
          <components.BlockHeading
            onPress={onPress}
            title='Featured products'
            containerStyle={{marginHorizontal: 20, marginBottom: 14}}
          />
          <custom.FlatList
            data={slice}
            horizontal={true}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
            pagingEnabled={Platform.OS === 'ios' ? true : false}
            snapToInterval={theme.sizes.width - responsiveWidth(60.4)}
            renderItem={({item, index}) => {
              const lastItem = index === slice.length - 1;
              return (
                <components.FeaturedItem item={item} lastItem={lastItem} />
              );
            }}
          />
        </View>
      );
    }

    return null;
  };

  const renderContent = () => {
    const loading = productsLoading || carouselLoading || bannersLoading;
    const error = productsError || carouselError || bannersError;
    const data = productsData || carouselData || bannersData;
    const empty =
      products.length === 0 &&
      bestSellers.length === 0 &&
      featured.length === 0;

    if (loading) {
      return <components.Loader />;
    }

    if (empty) {
      return (
        <custom.SmartView
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>You don't have any data.</Text>
        </custom.SmartView>
      );
    }

    if (error) {
      return (
        <custom.SmartView
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Something went wrong.</Text>
        </custom.SmartView>
      );
    }

    if (data) {
      return (
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
        >
          {renderCarousel()}
          {renderIndicator()}
          {renderBestSellers()}
          {renderBanner()}
          {renderFeatured()}
        </ScrollView>
      );
    }
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
