import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPokemonByIdThunk } from "pages/Pokemons/api";
import PokemonDetailsView from "../components/PokemonDetailsView";
import { pokemonSelectors } from "pages/Pokemons/selectors";
import { statNormolize } from "../utils/statNormolize";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetails = useSelector(pokemonSelectors.data);
  const stats = statNormolize(pokemonDetails.stats);
  const error = useSelector(pokemonSelectors.error);
  const isLoading = useSelector(pokemonSelectors.isLoading);

  useEffect(() => {
    dispatch(getPokemonByIdThunk(id));
  }, [dispatch, id]);

  return <PokemonDetailsView pokemonDetails={pokemonDetails} stats={stats} />;
};
export default PokemonDetailsContainer;
