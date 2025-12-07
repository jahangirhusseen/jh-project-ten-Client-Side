import React, { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signInUser, signWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlePassToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      toast.warning("Please provide your email to proceed");
    }
    setError("");
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success(`🚀 Login Successful!`);
        navigate(location?.state || "/");
      })
      .catch((error) => setError(error.message));
  };
  const handleGoogleSignup = () => {
    signWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast(`${error.message}`);
      });
  };

  const HandleForgetPass = () => {
    const userEmail = emailRef.current.value;
    if (!userEmail) {
      toast.warning("Please provide your email to proceed");
      return;
    }
    navigate(`/forget/${userEmail}`);
  };
  return (
    <>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form className="mt-3 " onSubmit={handleLoginSubmit}>
            <fieldset className="fieldset gap-4">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>

              <div className="relative flex  items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div
                  onClick={handlePassToggle}
                  className="absolute right-8 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div>
                <a onClick={HandleForgetPass} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleSignup}
            className="btn bg-white text-black border-[#e5e5e5] mb-3"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          {error && <p className="text-xl text-red-500">{error}</p>}
          <p className="text-left">
            Already Have an Account ? Please{" "}
            <Link className="text-blue-400 underline" to={"/registration"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
