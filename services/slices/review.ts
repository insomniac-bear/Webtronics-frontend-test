import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  order: number[];
}

const initialState: IInitialState = {
  order: [0, 1, 2],
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setLeftStep(state) {
      state.order = state.order.map(item => {
        return item === 0 ? state.order.length - 1 : item - 1;
      });
    },
    setRightStep(state) {
      state.order = state.order.map(item => {
        return item === (state.order.length - 1) ? 0 : item + 1;
      });
    },
  },
});

export const {
  setLeftStep,
  setRightStep,
} = reviewSlice.actions;
