import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {showMessage} from 'react-native-flash-message';
import {addToCart} from '../store/slices/cartSlice';
import {hooks} from '../hooks';
import {removeFromCart} from '../store/slices/cartSlice';

type Props = {
  version?: number;
  item: ProductType;
  containerStyle?: object;
};

const ProductInCart: React.FC<Props> = ({
  item,
  version = 1,
  containerStyle,
}): JSX.Element => {
  const dispatch = hooks.useDispatch();
  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const exist = (item: ProductType) => cart.find((i) => i.id === item.id);
  const strokeColor = exist(item)
    ? theme.colors.accent
    : theme.colors.textColor;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in cart',
      'Are you sure you want to delete from cart ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removeFromCart(item));
            showMessage({
              message: 'Success',
              description: `${item.name} removed from cart`,
              type: 'success',
              icon: 'success',
            });
          },
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        if (exist(item)) {
          itemExistMessage();
        }
        if (!exist(item)) {
          dispatch(addToCart(item));
          showMessage({
            message: 'Success',
            description: `${item.name} added to cart`,
            type: 'success',
            icon: 'success',
          });
        }
      }}
    >
      {version === 1 && <svg.BagSmallSvg strokeColor={strokeColor} />}
      {version === 2 && <svg.BagBigSvg />}
    </TouchableOpacity>
  );
};

export default ProductInCart;
