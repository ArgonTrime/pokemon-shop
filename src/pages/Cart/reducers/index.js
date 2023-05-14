import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunks/getItems";
import { addItemThunk } from "../api/thunks/addItem";

const initialState = {
  items: [],
  totalPrice: 0,
  quantity: 0,
  isLoading: false,
  errors: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemsThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getItemsThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.isLoading = false;
      state.errors = null;
      state.items = itemsList;
      state.quantity = quantity;
      state.totalPrice = totalPrice;
    });
    builder.addCase(getItemsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(addItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(addItemThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.items = itemsList;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(addItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default cartSlice.reducer;
