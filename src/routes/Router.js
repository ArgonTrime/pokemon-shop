import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import Home from "pages/Home";
import SignUpContainer from "pages/SingUp/containers/SingUpContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<h2>Sign In, page</h2>} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.POKEMONS} element={<h2>Pokemons page</h2>} />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={<h1>Pokemon details page</h1>}
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default Router;
