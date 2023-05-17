import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../CartService";

export const deleteItemThunk = createAsyncThunk(
  "cart/deleteItem",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartService.deleteItem(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
