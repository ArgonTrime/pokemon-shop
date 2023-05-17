import CustomPagination from "components/Pagination";
import PokemonsCards from "../PokemonsCards";

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
        {isLoadingPokemons && <p>Loadinng...</p>}
        <PokemonsCards
          pokemons={pokemons}
          handleAddItemToCart={handleAddItemToCart}
        />

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
export default PokemonsView;
