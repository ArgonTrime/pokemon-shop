import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApiConfig } from "api/config/pokemonApiConfig";

//requests
// const getPokemons = (pageNumber, countPokemons) =>
//   pokemonApiConfig.get(`/products?page=${pageNumber}&limit=${countPokemons}`);
const getPokemons = (body) =>
  pokemonApiConfig.get("/products", { params: body });

const getPokemonById = (pokemonId) =>
  pokemonApiConfig.get(`/products/${pokemonId}`);

// async thunks
export const getPokemonByIdThunk = createAsyncThunk(
  "pokemonsPage/getPokemonById",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPokemonById(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getPokemonsThunk = createAsyncThunk(
  "pokemonsPage/getPokemons",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPokemons(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
