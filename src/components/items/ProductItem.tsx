import { View, Text } from 'react-native';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { product } from '../../product';
import { ProductType } from '../../types';
import SaleBadge from '../badges/SaleBadge';
import { IProductMain } from '../../constants/model/product-interface';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { Currency } from '../../constants/enum/currency-enum';

type Props = { item: IProductMain; lastItem: boolean };

const ProductItem: React.FC<Props> = ({ item, lastItem }) => {
  const navigation = hooks.useNavigation();
  const blockWidth = responsiveWidth(50) - 20 - 7.5;
  return (
    <TouchableOpacity
      style={{ width: blockWidth, marginBottom: 20 }}
      onPress={() => {
        navigation.navigate('ProductDetail', { name: item.name });
      }}
    >
      <custom.ImageBackground
        source={{ uri: item.image }}
        style={{
          width: '100%',
          aspectRatio: 160 / 170,
          marginBottom: 6,
        }}
        resizeMode='cover'
      >
        {/* Display of product is on sale */}
        {item.unitPrice !== item.purchasePrice && (
          <View
            style={{
              backgroundColor: theme.colors.khakiGreen,
              alignSelf: 'flex-start',
              paddingHorizontal: 6,
              paddingVertical: 4
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
        )}
        {/* <product.ProductInWishlist
          item={item}
          containerStyle={{
            position: 'absolute',
            padding: 10,
            right: 0,
            top: 0,
          }}
        />
        <product.ProductInCart
          item={item}
          containerStyle={{
            position: 'absolute',
            padding: 10,
            right: 0,
            top: 40,
          }}
        /> */}
      </custom.ImageBackground>

      {/* Rating of the product */}
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
      >
        <svg.RatingStarSvg rating={item.averageStar} />
      </View>

      {/* Name of the produdct */}
      <Text
        style={{
          marginRight: 'auto',
          ...theme.fonts.Mulish_Regular,
          fontSize: 14,
          lineHeight: 14 * 1.7,
          color: theme.colors.textColor
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>

      {/* Price of the product */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {item.unitPrice !== item.purchasePrice && (
          <Text
            style={{
              marginRight: 4,
              textDecorationLine: 'line-through',
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 12,
              color: theme.colors.textColor,
              lineHeight: 12 * 1.5,
            }}
          >
            {item.unitPrice}{Currency.VND}
          </Text>
        )}
        <Text
          style={{
            ...theme.fonts.Mulish_SemiBold,
            fontSize: 14,
            lineHeight: 14 * 1.5,
            color: item.unitPrice !== item.purchasePrice ? theme.colors.accent : theme.colors.mainColor
          }}
          numberOfLines={1}
        >
          {item.purchasePrice}{Currency.VND}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default ProductItem;
