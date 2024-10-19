import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { text } from '../text';
import { hooks } from '../hooks';
import { utils } from '../utils';
import { custom } from '../custom';
import { product } from '../product';
import { theme } from '../constants';
import { reviews } from '../constants';
import { actions } from '../store/actions';
import { components } from '../components';
import type { RootStackParamList } from '../types';
import { queryHooks } from '../store/slices/apiSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

const Product: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const cart = hooks.useSelector((state) => state.cartSlice.list);

  const { data, error, isLoading } = queryHooks.useGetColorsQuery();

  const names = item.colors as string[];
  const images = JSON.parse(item.images) as string[];
  const dataColors = data instanceof Array ? data : [];
  const quantity = utils.quantityInCart(item) as number;
  const colors = dataColors?.filter((item) => names?.includes(item.name));

  type SelectedColorType = (typeof colors)[number] | undefined;

  // const ifExist = cart?.find((el) => el.id === item.id);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState<SelectedColorType>();


  const newItem = {
    ...item,
    color: selectedColor?.name,
    size: selectedSize,
  };

  const updateCurrentSlideIndex = (e: any): void => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (!isLoading && colors?.length > 0) {
      setSelectedColor(colors?.[0]);
    }

    setSelectedColor(colors?.[0]);
  }, [isLoading]);

  if (isLoading) {
    return <components.Loader />;
  }

  // const onPress = () => {

  //   const renderAlert = () => {
  //     if (quantity > 0) {
  //       Alert.alert(
  //         'Item already in cart',
  //         'Do you want to add another one?',
  //         [
  //           {
  //             text: 'Cancel',
  //             style: 'cancel',
  //           },
  //           {
  //             text: 'OK',
  //             onPress: () => {
  //               dispatch(actions.fullRemoveFromCart(item));
  //               dispatch(actions.addToCart(newItem));
  //               utils.showMessage({
  //                 message: 'Success',
  //                 description: `${item.name} added to cart`,
  //                 type: 'success',
  //                 icon: 'success',
  //               });
  //             },
  //           },
  //         ],
  //         { cancelable: false },
  //       );
  //       return;
  //     }
  //   };

  //   if (quantity > 0) {
  //     renderAlert();
  //     return;
  //   }

  //   dispatch(actions.addToCart(newItem));
  //   utils.showMessage({
  //     message: 'Success',
  //     description: `${item.name} added to cart`,
  //     type: 'success',
  //     icon: 'success',
  //   });

  // };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderFlashMessage = () => {
    return <components.FlashMessage />;
  };

  const renderHeader = () => {
    return <components.Header logo={true} goBack={true} basket={true} />;
  };

  const renderCarousel = () => {
    const renderImages = () => {
      return (
        <ScrollView
          bounces={false}
          horizontal={true}
          pagingEnabled={true}
          style={{ marginBottom: 20 }}
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ backgroundColor: theme.colors.lightBlue }}
        >
          {images.map((item: any, index: any) => {
            return (
              <custom.Image
                key={index}
                source={{ uri: item }}
                style={{ width: theme.sizes.width, aspectRatio: 1.07 }}
                resizeMode='cover'
              />
            );
          })}
        </ScrollView>
      );
    };

    const renderDots = () => {
      if (images.length > 1) {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: 20,
            }}
          >
            {images.map((image, index, array) => {
              return (
                <View
                  key={index}
                  style={{
                    width: currentSlideIndex === index ? 22 : 6,
                    height: currentSlideIndex === index ? 8 : 6,
                    borderRadius: 22 / 2,
                    backgroundColor:
                      currentSlideIndex === index
                        ? theme.colors.transparent
                        : theme.colors.mainColor,
                    borderWidth: 2,
                    borderColor:
                      currentSlideIndex === index
                        ? theme.colors.mainColor
                        : theme.colors.mainColor,
                    marginHorizontal: 4,
                  }}
                />
              );
            })}
          </View>
        );
      }
      return null;
    };

    return (
      <View
        style={{
          marginBottom: 30,
          marginTop: 17,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
        }}
      >
        {renderImages()}
        {renderDots()}
      </View>
    );
  };

  const renderName = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <text.H3>{item.name}</text.H3>
        <product.ProductInWishlistInner item={item} />
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <product.ProductRating value={reviews.length} item={item} />
      </View>
    );
  };

  const renderPriceAndCounter = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {item.old_price && (
            <Text
              style={{
                marginRight: 11,
                color: theme.colors.textColor,
                textDecorationLine: 'line-through',
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
              }}
            >
              {item.old_price}
            </Text>
          )}
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 20,
              color: theme.colors.mainColor,
            }}
          >
            $37.88
          </Text>
        </View>

        <product.ProductCounterInner item={newItem} />
      </View>
    );
  };

  const renderSizes = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 21 }}>
        <text.H5 style={{ marginBottom: 14 }}>Size</text.H5>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {item?.sizes?.map((item, index, array) => {
            const lastItem = index === array.length - 1;
            return (
              <custom.TouchableOpacity
                key={index}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 25,
                  marginRight: lastItem ? 0 : 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: theme.colors.lightBlue,
                  backgroundColor:
                    selectedSize === item
                      ? theme.colors.lightBlue
                      : theme.colors.transparent,
                }}
                onPress={() => setSelectedSize(item)}
              >
                <Text
                  style={{
                    ...theme.fonts.Mulish_SemiBold,
                    fontSize: 12,
                    color: theme.colors.mainColor,
                  }}
                >
                  {item}
                </Text>
              </custom.TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderColors = () => {
    const empty = colors?.length > 0;

    if (empty) {
      return (
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <text.H5 style={{ marginRight: 26 }}>Color</text.H5>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {colors.map((item, index, array) => {
              const lastElement = index === array.length - 1;
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    marginRight: lastElement ? 0 : 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: item.code,
                    borderWidth: 4,
                    borderColor:
                      selectedColor === item
                        ? theme.colors.lightBlue
                        : theme.colors.white,
                  }}
                  onPress={() => setSelectedColor(item)}
                />
              );
            })}
          </View>
        </View>
      );
    }

    return null;
  };

  const renderDescription = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <text.H5 style={{ marginBottom: 14 }}>Description</text.H5>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
        <components.Button
          title='+ Add to cart'
          // onPress={() => onPress()}
          containerStyle={{ marginBottom: 14 }}
        />
      </View>
    );
  };

  const renderReviews = () => {
    const slice = reviews.slice(0, 3);
    return (
      <View style={{ marginBottom: 20 }}>
        <components.BlockHeading
          title={`Reviews (${reviews.length})`}
          // onPress={() => {
          //   navigation.navigate('Reviews', { productId: item. });
          // }}
          containerStyle={{ marginBottom: 14, paddingHorizontal: 20 }}
        />
        {slice.map((review, index, array) => {
          const lastItem = index === array.length - 1;
          return (
            <components.ReviewItem
              review={review}
              key={index}
              item={item}
              lastItem={lastItem}
            />
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {renderCarousel()}
        {renderName()}
        {renderRating()}
        {renderPriceAndCounter()}
        {renderSizes()}
        {renderColors()}
        {renderDescription()}
        {renderButton()}
        {renderReviews()}
      </ScrollView>
    );
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
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Product;
