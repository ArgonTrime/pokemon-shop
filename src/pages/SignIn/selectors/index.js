import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;
export const isAuthenticatedSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuthenticated
);

export const errorAuthSelector = createSelector(
  baseSelector,
  (auth) => auth.error
);

export const accountDataSelector = createSelector(
  baseSelector,
  (auth) => auth.accountData
);
export const customerIdSelector = createSelector(
  accountDataSelector,
  (accountData) => accountData._id
);

export const pageNumberForPaginationSelector = createSelector(
  baseSelector,
  (auth) => auth.pageNumberForPagination
);
