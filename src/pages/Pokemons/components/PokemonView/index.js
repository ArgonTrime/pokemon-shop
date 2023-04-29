import CustomPagination from "components/Pagination";
import PokemonsCards from "../PokemonsCards";

import styles from "./style.module.scss";
import Container from "@mui/material/Container";

const PokemonsView = ({
  pokemons,
  isLoadingPokemons,
  pageNumber,
  handleChangePage,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.breadcrambs}>breadcrambs...</div>
        <h2>Pokémons store</h2>
        {isLoadingPokemons && <p>Loadinng...</p>}
        <PokemonsCards pokemons={pokemons} />

        <CustomPagination
          startPage={pageNumber}
          countPage={20}
          handleChange={handleChangePage}
        />
      </div>
    </div>
  );
};
export default PokemonsView;
