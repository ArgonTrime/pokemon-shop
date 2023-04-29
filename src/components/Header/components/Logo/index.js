import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "routes/routeNames";
import pokeball from "static/images/pokeball.webp";

import styles from "./style.module.scss";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME}>
        <img src={pokeball} alt="pokeball" />
      </Link>
      <Link to={ROUTE_NAMES.HOME}>ps</Link>
    </div>
  );
};
export default Logo;
