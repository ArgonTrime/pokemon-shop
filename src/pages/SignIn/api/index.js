import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApiConfig as pokemonApi } from "api/config/pokemonApiConfig";
import LocalStorageService from "services/LocalStorageService";

const signIn = (body) => pokemonApi.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signIn(payload);
      const { accessToken, ...accountData } = responce.data;
      LocalStorageService.saveToken(accessToken);
      return accountData;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
