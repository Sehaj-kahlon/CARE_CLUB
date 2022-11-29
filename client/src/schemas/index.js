import * as yup from "yup";
const passwordRules = /^(?==.*\d)|(?=.*[a-z])|(?=.*{A-Z}).{5,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const basicSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Mininum 4 characters")
    // .max(30, "Maximum 30 characters")
    .required("Required"),
  mail: yup.string().email("Please enter valid email ").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
  donatorType: yup.string().oneOf(["Organisation", "Individual", "Others"], "Invalid Donator Type"),
  contactNumber: yup
    .string()
    .matches(phoneRegExp, "Phone Number is not Valid")
    .min(10, "Too Short")
    .max(10, "Too Long"),
  test: yup.boolean().oneOf([true], "Please accept the terms of service"),
});
