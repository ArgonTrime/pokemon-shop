import Button from "@mui/material/Button";
import { capitalize } from "lodash";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { pokemonInCart } from "pages/Cart/utils";
import { useCart } from "hooks";

import styles from "./style.module.scss";

const PokemonCard = ({ id, name, image, price, handleAddItemToCart }) => {
  const [isPokemonInCart, setIsPokemonInCart] = useState(false);
  const { cartItems } = useCart();
  useEffect(() => {
    setIsPokemonInCart(pokemonInCart(id, cartItems));
  }, [id, cartItems]);
  return (
    <div key={id} className={styles.cardWrapper}>
      <h3>{capitalize(name)}</h3>
      <img src={image} alt={name} />
      <p>
        Price: <span className={styles.price}>${price}</span>
      </p>
      <div className={styles.controls}>
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
        <Link to={`/pokemons/${id}`}>
          <Button variant="contained">Details</Button>
        </Link>
      </div>
    </div>
  );
};
PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};
export default PokemonCard;
