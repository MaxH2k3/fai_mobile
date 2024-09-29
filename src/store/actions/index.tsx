import {setTag} from '../slices/tagSlice';
import {
  removeFromCart,
  addToCart,
  fullRemoveFromCart,
} from '../slices/cartSlice';
import {setRefreshToken, setAccessToken} from '../slices/appStateSlice';
import {addToWishlist, removeFromWishlist} from '../slices/wishlistSlice';

export const actions = {
  setTag,
  addToCart,
  addToWishlist,
  removeFromCart,
  setAccessToken,
  setRefreshToken,
  fullRemoveFromCart,
  removeFromWishlist,
};
