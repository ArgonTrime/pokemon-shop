import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import Home from "pages/Home";
import SignUpContainer from "pages/SingUp/containers/SingUpContainer";
import SignInContainer from "pages/SignIn/containers/SignInContainer";
import PrivateRoute from "./PrivateRoute";
import PokemonsContainer from "pages/Pokemons/containers/PokemonsContainer";
import ProfileContainer from "pages/Profile/containers/ProfileContainer";
import PokemonDetailsContainer from "pages/PokemonDetails/containers/PokemonDetailsContainer";
import CartContainer from "pages/Cart/containers/CartContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route
        path={ROUTE_NAMES.POKEMONS}
        element={
          <PrivateRoute>
            <PokemonsContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={
          <PrivateRoute>
            <PokemonDetailsContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.PROFILE}
        element={
          <PrivateRoute>
            <ProfileContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.CART}
        element={
          <PrivateRoute>
            <CartContainer />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
};
export default Router;
