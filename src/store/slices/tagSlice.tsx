import {createSlice} from '@reduxjs/toolkit';

const initialState = {tag: 'all'};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
    },
  },
});

export const {setTag} = tagSlice.actions;
