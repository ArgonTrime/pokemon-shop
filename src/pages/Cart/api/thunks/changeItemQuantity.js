import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../CartService";

export const changeItemQuantityThunk = createAsyncThunk(
  "cart/changeItemQuntity",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartService.updateItem(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
