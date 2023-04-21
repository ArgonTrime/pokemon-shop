import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsThunk } from "../api";

const initialState = {
  pokemons: {
    isLoading: false,
    error: null,
    data: [],
  },
  pokemonById: {
    isLoading: false,
    error: null,
    data: {},
  },
};

const pokemonsPageSlice = createSlice({
  name: "pokemonsPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.pokemons.isLoading = true;
    });
    builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
      state.pokemons.isLoading = false;
      state.pokemons.data = payload;
    });
    builder.addCase(getPokemonsThunk.rejected, (state, { payload }) => {
      state.pokemons.isLoading = false;
      state.pokemons.error = payload;
    });
  },
});
export default pokemonsPageSlice.reducer;
