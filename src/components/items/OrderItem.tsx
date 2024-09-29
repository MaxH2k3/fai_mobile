import React from 'react';
import {View, Text} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {product} from '../../product';
import {theme} from '../../constants';
import {ProductType} from '../../types';
import SaleBadge from '../badges/SaleBadge';

type Props = {lastItem: boolean; item: ProductType};

const OrderItem: React.FC<Props> = ({item, lastItem}) => {
  const navigation = hooks.useNavigation();

  const containerStyle = {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: lastItem ? 20 : 14,
  };

  const renderImage = () => {
    return (
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{
          width: 100,
          height: 100,
          marginRight: 14,
        }}
      >
        <SaleBadge item={item} />
      </custom.ImageBackground>
    );
  };

  const renderDetails = () => {
    return (
      <View style={{marginRight: 'auto'}}>
        <product.ProductName item={item} />
        <product.ProductPrice item={item} />
        <View style={{marginTop: 'auto'}}>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.textColor,
              ...theme.fonts.Mulish_Regular,
              lineHeight: 14 * 1.6,
            }}
          >
            Size: {item.size ? item.size.toUpperCase() : 'No size'}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.textColor,
              marginRight: 14,
              ...theme.fonts.Mulish_Regular,
              lineHeight: 14 * 1.6,
            }}
          >
            Color: {item.color ? item.color : 'No color'}
          </Text>
        </View>
      </View>
    );
  };

  const renderCounter = () => {
    return <product.ProductCounter item={item} />;
  };

  const onPress = () => {
    navigation.navigate('Product', {item});
  };

  return (
    <custom.TouchableOpacity
      style={{...containerStyle}}
      onPress={() => onPress()}
    >
      {renderImage()}
      {renderDetails()}
      {renderCounter()}
    </custom.TouchableOpacity>
  );
};

export default OrderItem;
