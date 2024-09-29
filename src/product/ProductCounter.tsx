import {View, Text} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {ProductType} from '../types';
import {actions} from '../store/actions';
import {theme} from '../constants';

type Props = {item: ProductType};

const ProductCounter: React.FC<Props> = ({item}) => {
  const dispatch = hooks.useDispatch();

  const quantity = utils.quantityInCart(item);

  return (
    <View
      style={{
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <custom.TouchableOpacity
        onPress={() => {
          dispatch(actions.addToCart(item));
        }}
      >
        <svg.PlusSvg />
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
          dispatch(actions.removeFromCart(item));
        }}
      >
        <svg.MinusSvg />
      </custom.TouchableOpacity>
    </View>
  );
};

export default ProductCounter;
