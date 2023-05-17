import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunks/getItems";
import { addItemThunk } from "../api/thunks/addItem";
import { deleteItemThunk } from "../api/thunks/deleteItem";
import { changeItemQuantityThunk } from "../api/thunks/changeItemQuantity";

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

    builder.addCase(changeItemQuantityThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(changeItemQuantityThunk.fulfilled, (state, { payload }) => {
      const { cartState, updatedItem } = payload;
      const { totalPrice } = cartState;
      state.isLoading = false;
      state.errors = null;
      state.totalPrice = totalPrice;

      const oldItem = state.items.find(({ id }) => id === updatedItem.id);
      oldItem.quantity = updatedItem.quantity;
    });
    builder.addCase(changeItemQuantityThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(deleteItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
      const { cartState, removedItemId } = payload;
      const { quantity, totalPrice } = cartState;
      state.isLoading = false;
      state.errors = null;
      state.totalPrice = totalPrice;
      state.quantity = quantity;

      const deletedItemId = state.items.findIndex(
        ({ id }) => id === removedItemId
      );
      state.items.splice(deletedItemId, 1);
    });
    builder.addCase(deleteItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default cartSlice.reducer;
