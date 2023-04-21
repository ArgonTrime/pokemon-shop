import { combineReducers } from "@reduxjs/toolkit";

import auth from "pages/SignIn/reducers/authSlice";

export const rootReducer = combineReducers({
  auth,
});
