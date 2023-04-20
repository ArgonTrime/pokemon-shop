import { memo } from "react";
import HeaderView from "../components/HeaderView";

const HeaderContainer = () => {
  const isAuthenticated = false;
  return <HeaderView isAuthenticated={isAuthenticated} />;
};
export default memo(HeaderContainer);
