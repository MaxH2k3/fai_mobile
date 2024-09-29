import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import type {ProductType} from '../../types';

type WishlistState = {
  list: ProductType[];
};

const initialState: WishlistState = {
  list: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<ProductType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (inWishlist) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
