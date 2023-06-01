import * as Yup from "yup";

export const SingUpValidationForm = Yup.object({
  firstName: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(10, "Maximum 10 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters (letters or numbers)")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
  gender: Yup.string()
    .matches(/male|female|Male|Female/, "Male or Female")
    .required("Required"),
  phone: Yup.string()
    .min(8, "Minimum 8 characters")
    .max(15, "Maximum 15 characters")
    .required("Required"),
});
