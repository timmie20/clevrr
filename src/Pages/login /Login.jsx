import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/buyaccount");
      console.log("success");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <form autoComplete="off">
      <div className="flex justify-center items-center bg-backgroundBlack h-[100vh] font-Rubik">
        <div className="flex flex-col text-white gap-[2em] w-[360px] m-[1em] items-center text-start">
          <p className="text-3xl font-[700] md:text-5xl">Login</p>

          <button
            className="py-3 w-full rounded-xl border-grayish border-[1px] flex justify-center items-center gap-3"
            onClick={signInWithGoogle}
            type="button"
          >
            <FcGoogle size={28} /> continue with a google account
          </button>
          <div className="flex flex-col space-y-3 text-grayish w-full">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className="inputs"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 text-grayish w-full">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="inputs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="h-[45px] w-full bg-customPink rounded-xl font-Rubik font-[400] hover:bg-[#87acec] hover:font-[700] duration-300 "
            onClick={handleSignIn}
          >
            Login
          </button>
          <div className="text-[14px] flex flex-col items-center">
            <Link to="/" style={{ color: "#F71B5D" }}>
              Back to home
            </Link>
            <div className="flex space-x-2">
              <p>Don't have an account ?</p>
              <Link to="/signup" style={{ color: "#F71B5D" }}>
                Signup for clevrr
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
