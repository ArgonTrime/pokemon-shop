import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "routes/routeNames";

import pokemons from "static/images/pokemons.png";
import styles from "./style.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.greetings}>
        <h1>Welcome Pokémon Store</h1>
        <p>
          <Link to={ROUTE_NAMES.SIGN_IN}>Log In</Link> to your account to use
          the store. Maybe you don't have it?{" "}
          <Link to={ROUTE_NAMES.SIGN_UP}>Register</Link> an account
        </p>
        <img src={pokemons} alt="pokemons" />
      </section>
    </div>
  );
};
export default Home;
