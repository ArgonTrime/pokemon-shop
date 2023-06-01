import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import HeaderView from "../components/HeaderView";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { useCart } from "hooks";

const HeaderContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const { cartItemsQuantity, getCartData } = useCart();

  useEffect(() => {
    if (isAuthenticated) {
      getCartData();
    }
  }, [isAuthenticated, getCartData]);

  return (
    <HeaderView
      isAuthenticated={isAuthenticated}
      cartItemsQuantity={cartItemsQuantity}
    />
  );
};
export default memo(HeaderContainer);
