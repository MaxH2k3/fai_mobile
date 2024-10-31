import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../../types';
import { ICartItem } from '../../constants/model/cart-interface';

const initialState = {
  list: [] as ICartItem[],
  total: 0,
  // discount: 2.88,
  // delivery: 2,
};

type StateType = typeof initialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: StateType = initialState,
      action: PayloadAction<ICartItem>,
    ) => {
      const inCart = state.list.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        });
        state.total += Number(action.payload.price);
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += Number(action.payload.price);
      }
    },

    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      const index = state.list.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (index !== -1) {
        const item = state.list[index];

        if (item.quantity && item.quantity > 1) {
          item.quantity -= 1;
          state.total -= Number(action.payload.price);
        } else {
          state.total -= Number(item.price);
          state.list.splice(index, 1);
        }
      }
    },


    fullRemoveFromCart: (state, action: PayloadAction<ICartItem>) => {
      const inCart = state.list.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (inCart) {
        state.total -= inCart.price * (inCart.quantity || 1);
        state.list = state.list.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.color !== action.payload.color ||
            item.size !== action.payload.size
        );
      }
    },


    resetCart: (state) => {
      state.list = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, resetCart, fullRemoveFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
