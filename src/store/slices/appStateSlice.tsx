import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AppStateType = {
  isFirstTime: boolean;
  refreshToken: string | null;
  accessToken: string | null;
};

const initialState: AppStateType = {
  isFirstTime: true,
  refreshToken: null,
  accessToken: null,
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsFirstTime: (state, action: PayloadAction<boolean>) => {
      state.isFirstTime = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});

export const {setIsFirstTime, setRefreshToken, setAccessToken} =
  appStateSlice.actions;

export {appStateSlice};
