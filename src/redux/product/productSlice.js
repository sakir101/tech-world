import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
  },
});

export const { toggleState } = productSlice.actions;

export default productSlice.reducer;
