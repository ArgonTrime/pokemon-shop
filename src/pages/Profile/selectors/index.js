import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.profile;

export const ordersSelector = createSelector(baseSelector, (profile) =>
  [...profile.orders].reverse()
);
export const isLoadingOrdersSelector = createSelector(
  baseSelector,
  (profile) => profile.isLoading
);
