import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunks/getItems";
import { addItemThunk } from "../api/thunks/addItem";
import { deleteItemThunk } from "../api/thunks/deleteItem";
import { changeItemQuantityThunk } from "../api/thunks/changeItemQuantity";
import { deleteAllItemsThunk } from "../api/thunks/deleteAllItems";
import { orderThunk } from "../api/thunks/order";

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
    builder
      .addCase(getItemsThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getItemsThunk.fulfilled, (state, { payload }) => {
        const { totalPrice, quantity, itemsList } = payload;
        state.isLoading = false;
        state.errors = null;
        state.items = itemsList;
        state.quantity = quantity;
        state.totalPrice = totalPrice;
      })
      .addCase(getItemsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });

    builder
      .addCase(addItemThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(addItemThunk.fulfilled, (state, { payload }) => {
        const { totalPrice, quantity, itemsList } = payload;
        state.items = itemsList;
        state.totalPrice = totalPrice;
        state.quantity = quantity;
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(addItemThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });

    builder
      .addCase(changeItemQuantityThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(changeItemQuantityThunk.fulfilled, (state, { payload }) => {
        const { cartState, updatedItem } = payload;
        const { totalPrice } = cartState;
        state.isLoading = false;
        state.errors = null;
        state.totalPrice = totalPrice;

        const oldItem = state.items.find(({ id }) => id === updatedItem.id);
        oldItem.quantity = updatedItem.quantity;
      })
      .addCase(changeItemQuantityThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });

    builder
      .addCase(deleteItemThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
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
      })
      .addCase(deleteItemThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });

    builder
      .addCase(deleteAllItemsThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(deleteAllItemsThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(deleteAllItemsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });

    builder
      .addCase(orderThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(orderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errors = null;
        state.items = [];
        state.totalPrice = 0;
        state.quantity = 0;
      })
      .addCase(orderThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload;
      });
  },
});

export default cartSlice.reducer;
