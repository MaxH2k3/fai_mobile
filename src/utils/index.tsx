import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
// import {showMessage} from 'react-native-flash-message';
import { showMessage as showMessageRN } from 'react-native-flash-message';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import { theme } from '../constants';
import { hooks } from '../hooks';
import { ProductType, CategoryType } from '../types';

export const responsive = (number: number) => {
  return {
    width: responsiveWidth(number),
    height: responsiveHeight(number),
    fontSize: responsiveFontSize(number),
  };
};

export const homeIndicatorHeight = () => {
  const insets = useSafeAreaInsets();
  const { bottom } = insets;
  return bottom;
};

export const statusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const { top } = insets;
  return top;
};

export const quantityInCart = (item: ProductType) => {
  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const ifItemInCart = cart.find((el) => el.id === item.id.toString());
  const quantity = ifItemInCart ? ifItemInCart.quantity : 0;
  return quantity;
};

export const bgColor = (color: string) => {
  return color === 'champagne'
    ? '#F8E7CD'
    : color === 'paleCerulean'
      ? '#FFA462'
      : color === 'opal'
        ? '#67A0A4'
        : color === 'camel'
          ? '#6B6D7B'
          : color === 'squidInk'
            ? '#142535'
            : theme.colors.white;
};

export const updateIndex: any = (e: any, setIndex: any) => {
  const offset = e.nativeEvent.contentOffset.x;
  const index = Math.round(offset / theme.sizes.width);
  setIndex(index);
};

export const addedToCartMessage = (item: ProductType) => {
  showMessage({
    message: `${item.name} added to cart`,
    type: 'success',
    icon: 'success',
  });
};

export const showMessage = ({ message, description, type, icon }: any) => {
  showMessageRN({
    message: message,
    description: description,
    type: type,
    icon: icon,
  });
};

export const qtyInCategory = (
  products: ProductType[],
  category: CategoryType,
): number => {
  const qty = products.filter((e) => e.categories.includes(category.name));
  return qty.length;
};

export const productsByCategory = (
  products: ProductType[],
  category: CategoryType,
): ProductType[] => {
  const filteredProducts = products.filter((e) =>
    e.categories.includes(category.name),
  );
  return filteredProducts;
};

export const colors = (discount: number) => {
  if (discount < 30) {
    return {
      backgroundColor: '#00824B',
    };
  }

  if (discount >= 30 && discount < 50) {
    return {
      backgroundColor: '#EF962D',
    };
  }

  if (discount >= 50) {
    return {
      backgroundColor: '#FA5555',
    };
  }
};

export const utils = {
  responsive,
  homeIndicatorHeight,
  statusBarHeight,
  bgColor,
  quantityInCart,
  addedToCartMessage,
  showMessage,
  qtyInCategory,
  productsByCategory,
  colors,
};
