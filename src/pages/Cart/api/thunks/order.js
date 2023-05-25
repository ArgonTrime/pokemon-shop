import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../CartService";

export const orderThunk = createAsyncThunk(
  "cart/order",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartService.order(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
