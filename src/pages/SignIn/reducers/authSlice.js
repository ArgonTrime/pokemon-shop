import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  accountData: {},
  pageNumberForPagination: 1,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    closeError: (state) => {
      state.error = null;
    },
    savePageNumberForPagination: (state, { payload }) => {
      state.pageNumberForPagination = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.accountData = payload;
        state.error = null;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { closeError, savePageNumberForPagination } = authSlice.actions;
export default authSlice.reducer;
