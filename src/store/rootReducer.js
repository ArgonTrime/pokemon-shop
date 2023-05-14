import { combineReducers } from "@reduxjs/toolkit";

import auth from "pages/SignIn/reducers/authSlice";
import pokemonsPage from "pages/Pokemons/reducers/pokemonsPageSlice";
import cart from "pages/Cart/reducers/index";

export const rootReducer = combineReducers({
  auth,
  pokemonsPage,
  cart,
});
