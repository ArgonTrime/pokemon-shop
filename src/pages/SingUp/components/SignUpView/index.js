import { Link } from "react-router-dom";

import SignUpForm from "../SignUpForm";

import styles from "./style.module.scss";

const SignUpView = ({ formik, data, errors }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.greetings}>
        <h2>Sign Up</h2>
        <p>
          Welcome to the Pokémon Store, register to use all the functionality.
          Already have an account, try to <Link to="/sign-in">Log In.</Link>
        </p>
        <SignUpForm formik={formik} data={data} errorsResponce={errors} />
      </div>
    </div>
  );
};
export default SignUpView;
