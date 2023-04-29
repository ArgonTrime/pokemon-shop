import { memo } from "react";
import { useSelector } from "react-redux";

import HeaderView from "../components/HeaderView";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";

const HeaderContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return <HeaderView isAuthenticated={isAuthenticated} />;
};
export default memo(HeaderContainer);
