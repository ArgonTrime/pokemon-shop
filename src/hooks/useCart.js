import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartErrorsSelector,
  cartIsLoadingSelector,
  cartItemsQuantitySelector,
  cartItemsSelector,
  cartTotalPriceSelector,
} from "pages/Cart/selectors";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";
import { addItemThunk } from "pages/Cart/api/thunks/addItem";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const isLoadingCartItems = useSelector(cartIsLoadingSelector);
  const errorsCart = useSelector(cartErrorsSelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  return {
    cartItems,
    cartItemsQuantity,
    totalPrice,
    isLoadingCartItems,
    errorsCart,
    getCartData,
    addItemToCart,
  };
};
export default useCart;
