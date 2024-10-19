import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { theme } from '../../constants';
import { product } from '../../product';
import { ProductType } from '../../types';
import { ICartItem, IWishlistItem } from '../../constants/model/cart-interface';
import { Currency } from '../../constants/enum/currency-enum';
import { svg } from '../../assets/svg';

type Props = {
  item: IWishlistItem;
};

const WishlistItem: React.FC<Props> = ({ item }) => {
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
        navigation.navigate('ProductDetail', { name: item.name });
      }}
    >
      <View style={{ flexDirection: 'row', height: 100 }}>
        <custom.ImageBackground
          source={{ uri: item.image }}
          style={{ width: 100, height: '100%', marginRight: 14 }}
          resizeMode='cover'
        />
        <View style={{ marginRight: 'auto' }}>
          <Text
            style={{
              marginRight: 'auto',
              ...theme.fonts.Mulish_Regular,
              fontSize: 14,
              lineHeight: 14 * 1.7,
              color: theme.colors.textColor,
            }}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
                color: item.unitPrice !== item.purchasePrice ? theme.colors.accent : theme.colors.mainColor,
              }}
            >
              {item.purchasePrice}{Currency.VND}
            </Text>
          </View>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
          >
            <svg.RatingStarSvg rating={item.rating} />
          </View>

        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <product.ProductInWishlist item={item} version={2} />
          <product.ProductInCart version={1} item={{
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.purchasePrice,
            quantity: 1
          }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistItem;
