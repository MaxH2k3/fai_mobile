import React from 'react';
import { TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { product } from '../../product';
import { ProductType } from '../../types';
import SaleBadge from '../badges/SaleBadge';

type Props = { item: ProductType; lastItem: boolean };

const NewProducts: React.FC<Props> = ({ item, lastItem }) => {
  const navigation = hooks.useNavigation();
  return (
    <TouchableOpacity
      style={{ marginRight: lastItem ? 20 : 14 }}
      onPress={() => {
        navigation.navigate('Product', { item });
      }}
    >
      <custom.ImageBackground
        source={{ uri: item.image }}
        style={{
          width: responsiveWidth(50),
          aspectRatio: 0.8,
          marginBottom: 6,
        }}
        resizeMode='cover'
      >
        <SaleBadge item={item} />
        <product.ProductInWishlist
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
        />
      </custom.ImageBackground>
      <product.ProductRating item={item} containerStyle={{ marginBottom: 4 }} />
      <product.ProductName item={item} />
      <product.ProductPrice item={item} />
    </TouchableOpacity>
  );
};

export default NewProducts;
