import { setTag } from '../slices/tagSlice';
import {
  removeFromCart,
  addToCart,
  fullRemoveFromCart,
  resetCart,
} from '../slices/cartSlice';
import { setRefreshToken, setAccessToken, setRole, setUserName, setEmail, setUser, setPaymentDetail } from '../slices/appStateSlice';
import { addToWishlist, removeFromWishlist } from '../slices/wishlistSlice';

export const actions = {
  setTag,
  addToCart,
  addToWishlist,
  removeFromCart,
  resetCart,
  setAccessToken,
  setRefreshToken,
  setRole,
  setUserName,
  setEmail,
  setUser,
  fullRemoveFromCart,
  removeFromWishlist,
  setPaymentDetail
};
