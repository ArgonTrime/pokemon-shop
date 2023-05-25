import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { omit } from "lodash";

import { getPokemonByIdThunk } from "pages/Pokemons/api";
import { pokemonSelectors } from "pages/Pokemons/selectors";
import PokemonDetailsView from "../components/PokemonDetailsView";
import { statNormolize } from "../utils/statNormolize";
import { useCart } from "hooks";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetails = useSelector(pokemonSelectors.data);
  const stats = statNormolize(pokemonDetails.stats);
  const error = useSelector(pokemonSelectors.error);
  const isLoading = useSelector(pokemonSelectors.isLoading);

  const { addItemToCart } = useCart();

  useEffect(() => {
    dispatch(getPokemonByIdThunk(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailsView
      pokemonDetails={omit(pokemonDetails, ["stats"])}
      stats={stats}
      handleAddItemToCart={addItemToCart}
      isLoading={isLoading}
    />
  );
};
export default PokemonDetailsContainer;
