import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {apiSlice} from './slices/apiSlice';
import {tabSlice} from './slices/tabSlice';
import {tagSlice} from './slices/tagSlice';
import {cartSlice} from './slices/cartSlice';
import {appStateSlice} from './slices/appStateSlice';
import {wishlistSlice} from './slices/wishlistSlice';

const rootReducer = combineReducers({
  tab: tabSlice.reducer,
  tagSlice: tagSlice.reducer,
  apiSlice: apiSlice.reducer,
  cartSlice: cartSlice.reducer,
  appState: appStateSlice.reducer,
  wishlistSlice: wishlistSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartSlice', 'wishlistSlice', 'appState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const persistor = persistStore(store);
