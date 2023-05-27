import Button from "@mui/material/Button";

import ControlledInput from "components/ControlledInput";

import styles from "./style.module.scss";
import { Alert } from "@mui/material";
import { isNull } from "lodash";
import { Link } from "react-router-dom";

const SignUpForm = ({ formik, data, errorsResponce, handleRemoveError }) => {
  const { touched, errors, values, handleChange, handleSubmit } = formik;

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      {isNull(data) ? (
        <>
          {Object.entries(values).map(([name, value]) => (
            <ControlledInput
              name={name}
              value={value}
              variant="outlined"
              onChange={handleChange}
              label={name}
              key={name}
              error={
                errors[name] && touched[name] ? Boolean(errors[name]) : null
              }
              helperText={errors[name] && touched[name] ? errors[name] : null}
              type={name === "password" || name === "email" ? name : "text"}
              size="small"
            />
          ))}
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {errorsResponce?.message && (
            <Alert severity="error" onClose={handleRemoveError}>
              {errorsResponce.message}
            </Alert>
          )}
        </>
      ) : (
        <>
          <Alert severity="success">{data.data.message}</Alert>
          <p>
            Go <Link to="/sign-in">Log In</Link>
          </p>
        </>
      )}
    </form>
  );
};
export default SignUpForm;
