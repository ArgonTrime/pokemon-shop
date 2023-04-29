import PropTypes from "prop-types";

import SignInForm from "../SignInForm";

import styles from "./style.module.scss";

const SignInView = ({
  form,
  error,
  handleChange,
  handleSubmit,
  handleRemoveError,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h2>Sign In</h2>
        <p>Log in to use all the features of the store</p>
        <SignInForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleRemoveError={handleRemoveError}
          error={error}
        />
      </div>
    </div>
  );
};
SignInView.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRemoveError: PropTypes.func.isRequired,
};
export default SignInView;
