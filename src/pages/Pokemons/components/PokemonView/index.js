import PokemonsCards from "../PokemonsCards";

import styles from "./style.module.scss";

const PokemonsView = ({ pokemons }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.breadcrambs}>breadcrambs...</div>
        <h2>Pokémons store</h2>
        <PokemonsCards pokemons={pokemons} />
        <div>pagination...</div>
      </div>
    </div>
  );
};
export default PokemonsView;
