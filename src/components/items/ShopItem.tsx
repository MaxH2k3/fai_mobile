import { View, Text } from 'react-native';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { product } from '../../product';
import { ProductType } from '../../types';
import SaleBadge from '../badges/SaleBadge';

type Props = { item: ProductType; lastItem: boolean };

const ShopItem: React.FC<Props> = ({ item, lastItem }) => {
  const navigation = hooks.useNavigation();
  const blockWidth = responsiveWidth(50) - 20 - 7.5;
  return (
    <TouchableOpacity
      style={{ width: blockWidth, marginBottom: 20 }}
      onPress={() => {
        navigation.navigate('Product', { item });
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
        <SaleBadge item={item} />
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
      <product.ProductRating item={item} containerStyle={{ marginBottom: 4 }} />
      <product.ProductName item={item} />
      <product.ProductPrice item={item} />
    </TouchableOpacity>
  );
};

export default ShopItem;
