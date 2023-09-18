import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/AuthContext";
import { signupSchema } from "../../schemas/signupSchema";

const Signup = () => {
  const { createUser, addToFs } = useContext(userContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;
    setError("");
    try {
      await createUser(email, password);
      await addToFs(name, email, password);
      navigate("/buyaccount");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center bg-backgroundBlack h-[100vh] font-Rubik">
        <div className="flex flex-col text-white gap-[2em] w-[360px] items-center m-[1em]">
          <p className="text-2xl font-[700] md:text-3xl">
            Create a free account
          </p>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              id="name"
              type="text"
              className={`inputs ${
                errors.name && touched.name ? "input-error" : ""
              }`}
              value={values.name}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="text-[14px] text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="email">Email address</label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              className={`inputs ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-[14px] text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              className={`inputs ${
                errors.password && touched.password ? "input-error" : ""
              }`}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-[14px] text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col space-y-[10px] text-grayish w-[100%]">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              className={`inputs ${
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }`}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-[14px] text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type={"submit"}
            onClick={onSubmit}
            className="w-[100%] h-[45px] bg-customPink rounded-xl font-Rubik font-[400] hover:bg-[#87acec] hover:font-[700] duration-300"
          >
            Sign up
          </button>

          <div className="text-[14px] flex flex-col items-center">
            <Link to="/" style={{ color: "#F71B5D" }}>
              Back to home
            </Link>
            <div className="flex space-x-2">
              <p> Already got an account ?</p>
              <Link to="/login" style={{ color: "#F71B5D" }}>
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
