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
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item: ICartItem) => {
          if (item.id === action.payload.id) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        }, state);
        // state.total += action.payload.price;
        // price string to number
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
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && (item.quantity as number) > 1) {
            if (item.quantity) {
              item.quantity -= 1;
            }
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.total -= Number(action.payload.price);
      }
    },

    fullRemoveFromCart: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id) {
            state.total -= item.price * (item.quantity as number);
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
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
