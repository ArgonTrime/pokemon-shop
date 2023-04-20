import HeaderContainer from "components/Header/container/HeaderContainer";
import Footer from "components/Footer";

const MainView = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default MainView;
