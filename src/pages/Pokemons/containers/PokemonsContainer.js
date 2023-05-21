import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PokemonsView from "../components/PokemonView";
import { getPokemonsThunk } from "../api";
import { pokemonsSelectors } from "../selectors";
import { useCart, usePagination } from "hooks";
import { pageNumberForPaginationSelector } from "pages/SignIn/selectors";
import { savePageNumberForPagination } from "pages/SignIn/reducers/authSlice";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsSelectors.data);
  const isLoadingPokemons = useSelector(pokemonsSelectors.isLoading);
  const pageNumberForPagination = useSelector(pageNumberForPaginationSelector);
  const error = useSelector(pokemonsSelectors.error);

  const [page, handleChangePage] = usePagination(pageNumberForPagination);
  const { addItemToCart } = useCart();

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 8 }));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(savePageNumberForPagination(page));
    };
  });

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
