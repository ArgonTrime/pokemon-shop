import { useFormik } from "formik";

import { useFetching } from "hooks";
import { SingUpValidationForm } from "../validation";
import SignUpView from "../components/SignUpView";
import { signUp } from "../api";

const SignUpContainer = () => {
  const { data, errors, handleDataLoad } = useFetching(signUp);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      password: "",
      phone: "",
    },
    validationSchema: SingUpValidationForm,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(values);
      resetForm();
    },
  });

  return <SignUpView formik={formik} data={data} errors={errors} />;
};
export default SignUpContainer;
