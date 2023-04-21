import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useForm } from "hooks";
import SignInView from "../components/SignInView";
import { errorAuthSelector, isAuthenticatedSelector } from "../selectors";
import { signInThunk } from "../api";
import { ROUTE_NAMES } from "routes/routeNames";
import { closeError } from "../reducers/authSlice";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const error = useSelector(errorAuthSelector);
  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
    handleReset();
  };
  const handleRemoveError = () => {
    dispatch(closeError());
  };

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.POKEMONS} />;
  }

  return (
    <SignInView
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleRemoveError={handleRemoveError}
    />
  );
};
export default SignInContainer;
