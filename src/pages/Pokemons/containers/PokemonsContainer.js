import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PokemonsView from "../components/PokemonView";
import { getPokemonsThunk } from "../api";
import { pokemonsSelectors } from "../selectors";
import { useCart, usePagination } from "hooks";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsSelectors.data);
  const isLoadingPokemons = useSelector(pokemonsSelectors.isLoading);
  const error = useSelector(pokemonsSelectors.error);

  const [page, handleChangePage] = usePagination(1);
  const { addItemToCart } = useCart();

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 8 }));
  }, [dispatch, page]);

  return (
    <PokemonsView
      pokemons={pokemons}
      pageNumber={page}
      isLoadingPokemons={isLoadingPokemons}
      handleChangePage={handleChangePage}
      handleAddItemToCart={addItemToCart}
    />
  );
};
export default PokemonsContainer;
