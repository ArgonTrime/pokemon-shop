import PropTypes from "prop-types";

import PokemonCard from "../PokemonCard";

import styles from "./style.module.scss";

const PokemonsCards = ({ pokemons, handleAddItemToCart }) => {
  return (
    <div className={styles.wrapper}>
      {pokemons.map(({ id, name, image, price }) => (
        <PokemonCard
          key={id}
          id={id}
          name={name}
          image={image}
          price={price}
          handleAddItemToCart={handleAddItemToCart}
        />
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
