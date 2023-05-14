import HeaderContainer from "components/Header/container/HeaderContainer";
import Footer from "components/Footer";

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
export default MainView;
