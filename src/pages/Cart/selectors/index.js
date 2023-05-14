import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.cart;

export const cartTotalPriceSelector = createSelector(
  baseSelector,
  (cart) => cart.totalPrice
);
export const cartItemsSelector = createSelector(
  baseSelector,
  (cart) => cart.items
);
export const cartItemsQuantitySelector = createSelector(
  baseSelector,
  (cart) => cart.quantity
);
export const cartIsLoadingSelector = createSelector(
  baseSelector,
  (cart) => cart.isLoading
);
export const cartErrorsSelector = createSelector(
  baseSelector,
  (cart) => cart.errors
);
