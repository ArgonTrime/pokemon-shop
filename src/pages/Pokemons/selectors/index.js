import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonsPage;

export const pokemonsSelectors = {
  error: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemons.error
  ),
  isLoading: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemons.isLoading
  ),
  data: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemons.data
  ),
};

export const pokemonSelectors = {
  error: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemonById.error
  ),
  isLoading: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemonById.isLoading
  ),
  data: createSelector(
    baseSelector,
    (pokemonsPage) => pokemonsPage.pokemonById.data
  ),
};
