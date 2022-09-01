import * as yup from "yup";

export const employeeValidationSchema = () =>
  yup.object().shape({
    fname: yup.string().strict().required("required"),
    lname: yup.string().strict().required("required"),
    email: yup.string().email("invalid email").required("required"),
    hometown: yup.string().strict().required("required"),
    date_of_birth: yup.string().strict().required("required"),
    mobile: yup
      .number()
      .required("required")
      .min(10, "must be 10 numbers")
      .typeError("you must specify a number"),
  });
