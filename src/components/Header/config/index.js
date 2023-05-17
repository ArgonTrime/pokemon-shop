import { ROUTE_NAMES } from "routes/routeNames";

export const NAVIGATION_ITEMS = {
  public: [
    {
      title: "Home",
      path: ROUTE_NAMES.HOME,
    },
    {
      title: "Sign In",
      path: ROUTE_NAMES.SIGN_IN,
    },
    {
      title: "Sign Up",
      path: ROUTE_NAMES.SIGN_UP,
    },
  ],
  private: [
    {
      title: "Pokémons",
      path: ROUTE_NAMES.POKEMONS,
    },
    {
      title: "Cart",
      path: ROUTE_NAMES.CART,
    },
  ],
};
export const publicNavsKeys = "public";
export const privateNavsKeys = "private";
