import { combineReducers } from "@reduxjs/toolkit";

import auth from "pages/SignIn/reducers/authSlice";
import pokemonsPage from "pages/Pokemons/reducers/pokemonsPageSlice";

export const rootReducer = combineReducers({
  auth,
  pokemonsPage,
});
