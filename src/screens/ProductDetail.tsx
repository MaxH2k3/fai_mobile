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
import { useQuery } from '@tanstack/react-query';
import { useProductQuery } from '../api/query/product-query';
import { IProduct } from '../constants/model/product-interface';
import { svg } from '../assets/svg';
import { Currency } from '../constants/enum/currency-enum';
import ProductReview from '../components/items/ProductReview';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({ route }) => {

  const dispatch = hooks.useDispatch();

  const { name } = route.params

  const { data, isLoading } = useQuery(
    useProductQuery({
      name: name
    })
  );

  const product: IProduct = data?.data || null;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [quantity, setQuantity] = useState(0)

  if (isLoading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderFlashMessage = () => {
    return <components.FlashMessage />;
  };

  const renderHeader = () => {
    return <components.Header logo={true} goBack={true} basket={true} />;
  };

  const updateCurrentSlideIndex = (e: any): void => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
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
          {product.images.map((image, index: any) => {
            return (
              <custom.Image
                key={index}
                source={{ uri: image.image }}
                style={{ width: theme.sizes.width, aspectRatio: 1.07 }}
                resizeMode='cover'
              />
            );
          })}
        </ScrollView>
      );
    };

    const renderDots = () => {
      if (product.images.length > 1) {
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
            {product.images.map((_, index) => {
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
        <text.H3>{product.name}</text.H3>
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View
        style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 10 }}
      >
        <svg.RatingStarSvg rating={product.statistic.averageStar} />
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
          {product.unitPrice !== product.purchasePrice && (
            <Text
              style={{
                marginRight: 11,
                color: theme.colors.textColor,
                textDecorationLine: 'line-through',
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
              }}
            >
              {product.unitPrice}{Currency.VND}
            </Text>
          )}
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 20,
              color: theme.colors.mainColor,
            }}
          >
            {product.purchasePrice}{Currency.VND}
          </Text>
        </View>

        <View
          style={{
            height: 40,
            width: 110,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: theme.colors.lightBlue,
          }}
        >
          <custom.TouchableOpacity
            onPress={() => {
              setQuantity(quantity - 1)
            }}
            style={{ paddingHorizontal: 16 }}
          >
            <svg.MinusInnerSvg />
          </custom.TouchableOpacity>
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              color: theme.colors.textColor,
            }}
          >
            {quantity}
          </Text>

          <custom.TouchableOpacity
            onPress={() => {
              setQuantity(quantity + 1)
            }}
            style={{ paddingHorizontal: 16 }}
          >
            <svg.PlusInnerSvg />
          </custom.TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSizes = () => {
    if (product.size.length > 0)
      return (
        <View style={{ paddingHorizontal: 20, marginBottom: 21 }}>
          <text.H5 style={{ marginBottom: 14 }}>Size</text.H5>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
          >
            {product?.size?.map((item, index, array) => {
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
                      // selectedSize === item
                      // ? theme.colors.lightBlue :
                      theme.colors.transparent,
                  }}
                // onPress={() => setSelectedSize(item)}
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
    const empty = product.color.length > 0;

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
            {product.color.map((item, index, array) => {
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
                    backgroundColor: `#${item}`,
                    borderWidth: 4,
                    borderColor:
                      // selectedColor === item
                      // ? theme.colors.lightBlue :
                      item == 'ffffffff' ?
                        theme.colors.lightBlue :
                        theme.colors.white,
                  }}
                // onPress={() => setSelectedColor(item)}
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
          {product.description}
        </Text>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
        <components.Button
          title='+ ADd to cart'
          onPress={() => onPress()}
          containerStyle={{ marginBottom: 14 }}
        />
      </View>
    );
  };

  const onPress = () => {
    const renderAlert = () => {
      if (quantity > 0) {
        Alert.alert(
          'Item already in cart',
          'Do you want to add another one?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                dispatch(actions.fullRemoveFromCart({
                  id: product.id,
                  image: product.images[0].image,
                  name: product.name,
                  price: product.purchasePrice,
                  quantity: quantity
                }));
                dispatch(actions.addToCart({
                  id: product.id,
                  image: product.images[0].image,
                  name: product.name,
                  price: product.purchasePrice,
                  quantity: quantity
                }));
                utils.showMessage({
                  message: 'Success',
                  description: `${product.name} added to cart`,
                  type: 'success',
                  icon: 'success',
                });
              },
            },
          ],
          { cancelable: false },
        );
        return;
      }
    };

    if (quantity > 0) {
      renderAlert();
      return;
    }
    dispatch(actions.addToCart({
      id: product.id,
      image: product.images[0].image,
      name: product.name,
      price: product.purchasePrice,
      quantity: quantity
    }));
    utils.showMessage({
      message: 'Success',
      description: `${product.name} added to cart`,
      type: 'success',
      icon: 'success',
    });
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
        <ProductReview productId={product.id} />
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

export default ProductDetail;
