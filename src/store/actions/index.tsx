import { setTag } from '../slices/tagSlice';
import {
  removeFromCart,
  addToCart,
  fullRemoveFromCart,
} from '../slices/cartSlice';
import { setRefreshToken, setAccessToken, setRole, setUserName } from '../slices/appStateSlice';
import { addToWishlist, removeFromWishlist } from '../slices/wishlistSlice';

export const actions = {
  setTag,
  addToCart,
  addToWishlist,
  removeFromCart,
  setAccessToken,
  setRefreshToken,
  setRole,
  setUserName,
  fullRemoveFromCart,
  removeFromWishlist,
};
