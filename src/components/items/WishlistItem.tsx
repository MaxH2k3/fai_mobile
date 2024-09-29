import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {product} from '../../product';
import {ProductType} from '../../types';

type Props = {
  item: ProductType;
};

const WishlistItem: React.FC<Props> = ({item}) => {
  const navigation = hooks.useNavigation();
  return (
    <TouchableOpacity
      style={{
        marginBottom: 20,
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomColor: theme.colors.lightBlue,
      }}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      <View style={{flexDirection: 'row', height: 100}}>
        <custom.ImageBackground
          source={{uri: item.image}}
          style={{width: 100, height: '100%', marginRight: 14}}
          resizeMode='cover'
        />
        <View style={{marginRight: 'auto'}}>
          <product.ProductName item={item} />
          <product.ProductPrice
            item={item}
            containerStyle={{marginBottom: 9}}
          />
          <product.ProductRating
            item={item}
            containerStyle={{marginBottom: 4}}
          />
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <product.ProductInWishlist item={item} version={2} />
          <product.ProductInCart version={2} item={item} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistItem;
