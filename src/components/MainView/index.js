import HeaderContainer from "components/Header/container/HeaderContainer";
import Footer from "components/Footer";

import PropTypes from "prop-types";

import styles from "./style.module.scss";

const MainView = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <div className={styles.wrapperContent}>{children}</div>
      <Footer />
    </>
  );
};
MainView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default MainView;
