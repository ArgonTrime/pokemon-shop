import { capitalize } from "lodash";
import Button from "@mui/material/Button";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "routes/routeNames";

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
          <div className={styles.controls}>
            <Button variant="contained" color="success">
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
export default PokemonsCards;
