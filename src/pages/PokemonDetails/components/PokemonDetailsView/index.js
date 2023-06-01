import Button from "@mui/material/Button";
import { capitalize, lowerCase } from "lodash";
import PropTypes from "prop-types";

import PokemonAbilities from "../PokemonAbilities";
import PokemonStat from "../PokemonStat";
import statsIconsByName from "pages/PokemonDetails/utils/statsIconsByName";
import { useCart } from "hooks";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { pokemonInCart } from "pages/Cart/utils";
import ProgressBar from "components/ProgressBar";

const PokemonDetailsView = ({
  pokemonDetails,
  stats,
  isLoading,
  handleAddItemToCart,
}) => {
  const { id, name, image, abilities, price } = pokemonDetails;
  const [isPokemonInCart, setIspokemonInCart] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    setIspokemonInCart(pokemonInCart(id, cartItems));
  }, [id, cartItems]);
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardHeader}>
            <img src={image} alt={name} />
            <h3>{capitalize(name)}</h3>
          </div>
          <div>
            <h4>Abilities</h4>
            <PokemonAbilities abilities={abilities} />
          </div>
          <div>
            <h4>Stats</h4>
            <div className={styles.detailsStats}>
              {stats?.map(([statName, statValue]) => (
                <PokemonStat
                  key={statName}
                  srcImage={statsIconsByName[statName]}
                  statName={capitalize(lowerCase(statName))}
                  statValue={statValue}
                />
              ))}
            </div>
            <div>
              <div className={styles.detailsPrice}>
                <p>
                  Price: <span>${price}</span>
                </p>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() =>
                    handleAddItemToCart({ id, name, image, price, quantity: 1 })
                  }
                  disabled={isPokemonInCart}
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
PokemonDetailsView.propTypes = {
  pokemonDetails: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  stats: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  handleAddItemToCart: PropTypes.func.isRequired,
};
export default PokemonDetailsView;
