import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  NAVIGATION_ITEMS,
  privateNavsKeys,
  publicNavsKeys,
} from "components/Header/config";
import LogOutButton from "../LogOutButton";
import Logo from "../Logo";
import ShoppingCartButton from "../ShoppingCartButton";
import UserButton from "../UserButton";
import { logOut } from "utils";

import styles from "./style.module.scss";

const HeaderView = ({ isAuthenticated, cartItemsQuantity }) => {
  const navsItemsAccessKey = isAuthenticated ? privateNavsKeys : publicNavsKeys;
  return (
    <header className={styles.wrapper}>
      <Logo />
      <div>
        {NAVIGATION_ITEMS[navsItemsAccessKey].map(({ title, path }) => (
          <Link key={title} to={path} className={styles.link}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.controls}>
        {isAuthenticated && (
          <>
            <UserButton />
            <ShoppingCartButton count={cartItemsQuantity} />
            <LogOutButton handleClick={logOut} />
          </>
        )}
      </div>
    </header>
  );
};
HeaderView.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  cartItemsQuantity: PropTypes.number,
};
export default HeaderView;
