import Button from "@mui/material/Button";
import { capitalize } from "lodash";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const PokemonsCards = ({ pokemons, handleAddItemToCart }) => {
  return (
    <div className={styles.wrapper}>
      {pokemons.map(({ id, name, image, price }) => (
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
            >
              Buy
            </Button>
            <Link to={`/pokemons/${id}`}>
              <Button variant="contained">Details</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
PokemonsCards.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  handleAddItemToCart: PropTypes.func.isRequired,
};
export default PokemonsCards;
