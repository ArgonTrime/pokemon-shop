import PropTypes from "prop-types";

import CustomPagination from "components/Pagination";
import PokemonsCards from "../PokemonsCards";
import ProgressBar from "components/ProgressBar";

import styles from "./style.module.scss";

const PokemonsView = ({
  pokemons,
  isLoadingPokemons,
  pageNumber,
  handleChangePage,
  handleAddItemToCart,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <h2>Pokémons store</h2>
        {isLoadingPokemons ? (
          <ProgressBar />
        ) : (
          <PokemonsCards
            pokemons={pokemons}
            handleAddItemToCart={handleAddItemToCart}
          />
        )}

        <CustomPagination
          startPage={pageNumber}
          page={pageNumber}
          countPage={20}
          handleChange={handleChangePage}
        />
      </div>
    </div>
  );
};
PokemonsView.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  isLoadingPokemons: PropTypes.bool,
  pageNumber: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};
export default PokemonsView;
