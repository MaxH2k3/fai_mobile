import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoggedInUserData } from '../../constants/model/user-interface';

type AppStateType = {
  isFirstTime: boolean;
  refreshToken: string | null;
  accessToken: string | null;
  role: string | null;
  userName: string | null;
  email: string | null;
  user: ILoggedInUserData | null
};

const initialState: AppStateType = {
  isFirstTime: true,
  refreshToken: null,
  accessToken: null,
  role: null,
  userName: null,
  email: null,
  user: null
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
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setUser: (state, action: PayloadAction<ILoggedInUserData | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setIsFirstTime, setRefreshToken, setAccessToken, setRole, setUserName, setEmail, setUser } =
  appStateSlice.actions;

export { appStateSlice };
