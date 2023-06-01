import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../CartService";

export const getItemsThunk = createAsyncThunk(
  "cart/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await CartService.getItems();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
