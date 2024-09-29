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

const ProductCounterInner: React.FC<Props> = ({item}) => {
  const dispatch = hooks.useDispatch();

  const quantity = utils.quantityInCart(item);

  return (
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
          dispatch(actions.removeFromCart(item));
        }}
        style={{paddingHorizontal: 16}}
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
          dispatch(
            actions.addToCart({
              ...item,
              // color: selectedColor,
            }),
          );
        }}
        style={{paddingHorizontal: 16}}
      >
        <svg.PlusInnerSvg />
      </custom.TouchableOpacity>
    </View>
  );
};

export default ProductCounterInner;
