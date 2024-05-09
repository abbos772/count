import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc(state, action) {
      state.value += action.payload;
    },
    dec(state) {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    res(state) {
      state.value = 0;
    },
    inp(state) {
      if (state.value) {
        state.value;
      }
    },
  },
});

export const { inc } = counterSlice.actions;
export const { dec } = counterSlice.actions;
export const { res } = counterSlice.actions;
export const { inp } = counterSlice.actions;
export default counterSlice.reducer;
