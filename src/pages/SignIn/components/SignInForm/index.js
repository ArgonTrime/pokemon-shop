import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import ControlledInput from "components/ControlledInput";

import styles from "./style.module.scss";
import { isNull } from "lodash";

const SignInForm = ({
  form,
  error,
  handleChange,
  handleSubmit,
  handleRemoveError,
}) => {
  const { email, password } = form;
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <ControlledInput
        name="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChange}
        type="email"
        size="small"
      />
      <ControlledInput
        name="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={handleChange}
        type="password"
        size="small"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      {!isNull(error) && (
        <Alert severity="error" onClose={handleRemoveError}>
          {error}
        </Alert>
      )}
    </form>
  );
};
SignInForm.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRemoveError: PropTypes.func.isRequired,
};
export default SignInForm;
