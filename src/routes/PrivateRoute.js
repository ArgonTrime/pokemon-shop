import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { ROUTE_NAMES } from "./routeNames";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} replace />;
  }
  return children;
};

export default PrivateRoute;
