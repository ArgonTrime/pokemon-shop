export const pokemonInCart = (pokemonId, pokemonsInCart) => {
  const pokemonInCard = pokemonsInCart.find(({ id }) => pokemonId === id);
  return pokemonId === pokemonInCard?.id;
};
