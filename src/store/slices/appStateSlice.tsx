import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppStateType = {
  isFirstTime: boolean;
  refreshToken: string | null;
  accessToken: string | null;
  role: string | null;
  userName: string | null;
};

const initialState: AppStateType = {
  isFirstTime: true,
  refreshToken: null,
  accessToken: null,
  role: null,
  userName: null
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
    setRole: (state, action: PayloadAction<string | null>) => {
      state.role = action.payload;
    },
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    },
  },
});

export const { setIsFirstTime, setRefreshToken, setAccessToken, setRole, setUserName } =
  appStateSlice.actions;

export { appStateSlice };
