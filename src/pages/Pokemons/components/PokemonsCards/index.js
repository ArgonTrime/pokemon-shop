import { capitalize } from "lodash";
import Button from "@mui/material/Button";

import styles from "./style.module.scss";

const PokemonsCards = ({ pokemons }) => {
  return (
    <div className={styles.wrapper}>
      {pokemons.map(({ id, name, image, price }) => (
        <div key={id} className={styles.cardWrapper}>
          <h3>{capitalize(name)}</h3>
          <img src={image} alt={name} />
          <p>
            Price: <span className={styles.price}>${price}</span>
          </p>
          <Button type="submit" variant="contained" color="success">
            Buy
          </Button>
        </div>
      ))}
    </div>
  );
};
export default PokemonsCards;
