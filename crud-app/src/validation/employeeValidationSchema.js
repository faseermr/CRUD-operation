import * as yup from "yup";

// validation schema for eployee details
export const employeeValidationSchema = () =>
  yup.object().shape({
    fname: yup.string().strict().required("required"),
    lname: yup.string().strict().required("required"),
    email: yup.string().email("invalid email").required("required"),
    hometown: yup.string().strict().required("required"),
    date_of_birth: yup.string().strict().required("required"),
    mobile: yup
      .number()
      .min(10000000, "please give a valid mobile number")
      .max(999999999, "please give a valid mobile number")
      .required("required")
      .typeError("you must specify a number"),
  });
