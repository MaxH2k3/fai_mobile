import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../../types';
import { ICartItem, IWishlistItem } from '../../constants/model/cart-interface';

type WishlistState = {
  list: IWishlistItem[];
};

const initialState: WishlistState = {
  list: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IWishlistItem>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IWishlistItem>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (inWishlist) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
