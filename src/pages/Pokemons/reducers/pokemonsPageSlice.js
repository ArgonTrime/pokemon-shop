import { createSlice } from "@reduxjs/toolkit";
import { getPokemonByIdThunk, getPokemonsThunk } from "../api";

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

    builder.addCase(getPokemonByIdThunk.pending, (state) => {
      state.pokemonById.isLoading = true;
    });
    builder.addCase(getPokemonByIdThunk.fulfilled, (state, { payload }) => {
      state.pokemonById.isLoading = false;
      state.pokemonById.data = payload;
    });
    builder.addCase(getPokemonByIdThunk.rejected, (state, { payload }) => {
      state.pokemonById.isLoading = false;
      state.pokemonById.error = payload;
    });
  },
});
export default pokemonsPageSlice.reducer;
