import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartEmptySelector,
  cartErrorsSelector,
  cartIsLoadingSelector,
  cartItemsQuantitySelector,
  cartItemsSelector,
  cartItemsTotalQuantitySelector,
  cartTotalPriceSelector,
} from "pages/Cart/selectors";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";
import { addItemThunk } from "pages/Cart/api/thunks/addItem";
import { changeItemQuantityThunk } from "pages/Cart/api/thunks/changeItemQuantity";
import { deleteItemThunk } from "pages/Cart/api/thunks/deleteItem";
import { deleteAllItemsThunk } from "pages/Cart/api/thunks/deleteAllItems";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const cartItemsTotalQuantity = useSelector(cartItemsTotalQuantitySelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const isLoadingCartItems = useSelector(cartIsLoadingSelector);
  const errorsCart = useSelector(cartErrorsSelector);
  const isEmptyCart = useSelector(cartEmptySelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  const changeItemQuantity = useCallback(
    (itemData) => {
      dispatch(changeItemQuantityThunk(itemData));
    },
    [dispatch]
  );

  const deleteItemById = useCallback(
    (id) => {
      dispatch(deleteItemThunk(id));
    },
    [dispatch]
  );

  const deleteAllItems = useCallback(
    (items) => {
      const promiseArray = items.map(({ id }) => dispatch(deleteItemThunk(id)));
      dispatch(deleteAllItemsThunk(promiseArray));
    },
    [dispatch]
  );

  return {
    cartItems,
    cartItemsQuantity,
    cartItemsTotalQuantity,
    totalPrice,
    isLoadingCartItems,
    isEmptyCart,
    errorsCart,
    getCartData,
    addItemToCart,
    changeItemQuantity,
    deleteItemById,
    deleteAllItems,
  };
};
export default useCart;
