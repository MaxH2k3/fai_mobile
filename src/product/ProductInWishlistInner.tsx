import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = PropsWithChildren<{
  version?: number;
  item: ProductType;
  containerStyle?: object;
}>;

const ProductInWishlistInner: React.FC<Props> = ({containerStyle, item}) => {
  const dispatch = hooks.useDispatch();

  const wishlist = hooks.useSelector((state) => state.wishlistSlice.list);
  const itemExist = (item: ProductType) =>
    wishlist.find((i) => i.id === item.id);

  const fillColor = itemExist(item) ? '#FA5555' : theme.colors.transparent;
  const strokeColor = itemExist(item) ? '#FA5555' : theme.colors.textColor;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in wishlist',
      'Are you sure you want to delete from wishlist ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(actions.removeFromWishlist(item)),
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        if (itemExist(item)) {
          itemExistMessage();
        }
        if (!itemExist(item)) {
          dispatch(actions.addToWishlist(item));
        }
      }}
    >
      <svg.HeartInnerSvg fillColor={fillColor} strokeColor={strokeColor} />
    </TouchableOpacity>
  );
};

export default ProductInWishlistInner;
