import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  accountData: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    closeError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.accountData = payload;
      state.error = null;
    });
    builder.addCase(signInThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export const { closeError } = authSlice.actions;
export default authSlice.reducer;
