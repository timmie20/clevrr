import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(16)
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Required!"),

  email: yup.string().email("Please enter a valid email").required("Required!"),

  password: yup
    .string()
    .min(6)
    .max(12)
    .matches(passwordRules, {
      message:
        "Min 6 characters, 1 uppercase letter, 1 lowercase letter, 1 numeric digit",
    })
    .required("Required!"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required!"),
});
