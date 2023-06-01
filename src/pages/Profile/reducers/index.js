import { createSlice } from "@reduxjs/toolkit";
import { getOrderThunk } from "pages/Cart/api/thunks/getOrders";

const initialState = {
  orders: [],
  isLoading: false,
  errors: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errors = null;
        state.orders = payload;
      })
      .addCase(getOrderThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });
  },
});
export default profileSlice.reducer;
