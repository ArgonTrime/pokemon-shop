import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { omit } from "lodash";

import { useFetching } from "hooks";
import { SingUpValidationForm } from "../validation";
import SignUpView from "../components/SignUpView";
import { signUp } from "../api";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { ROUTE_NAMES } from "routes/routeNames";

const SignUpContainer = () => {
  const { data, errors, setErrors, handleDataLoad } = useFetching(signUp);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const handleRemoveError = () => {
    setErrors(null);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      phone: "",
    },
    validationSchema: SingUpValidationForm,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(omit(values, ["confirmPassword"]));
      resetForm();
    },
  });

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  return (
    <SignUpView
      formik={formik}
      data={data}
      errors={errors}
      handleRemoveError={handleRemoveError}
    />
  );
};
export default SignUpContainer;
