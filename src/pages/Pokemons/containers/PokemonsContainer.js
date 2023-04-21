import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PokemonsView from "../components/PokemonView";
import { getPokemonsThunk } from "../api";
import { pokemonsSelectors } from "../selectors";

const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsSelectors.data);
  const error = useSelector(pokemonsSelectors.error);

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, [dispatch]);

  return <PokemonsView pokemons={pokemons} />;
};
export default PokemonsContainer;
