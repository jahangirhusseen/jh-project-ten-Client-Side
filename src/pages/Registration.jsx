import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../components/LoadingPage";
import { toast } from "react-toastify";

const Registration = () => {
  const { createUser, setUser, updateUser, signWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePassToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    setSuccess(false);
    setError("");
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have 8+ characters, uppercase, lowercase, number & special character"
      );
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Email must be a valid Gmail address");
    }

    if (!terms) {
      setError("You must agree to the Terms and Conditions!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/", { replace: true });
          })
          .catch((error) => {
            toast.warning(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };

  const handleGoogleSignup = () => {
    signWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => toast.warning(error.message));
  };
  return (
    <>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
        <div className="card-body">
          <h2 className="text-3xl font-bold">Create a new account.</h2>
          <form className="mt-3" onSubmit={handleSubmit}>
            <fieldset className="fieldset gap-4">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo Url"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
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

              <label className="label mb-0">
                <input type="checkbox" name="terms" className="checkbox" />
                Accept Our Terms and Condition!
              </label>
              <button className="btn btn-secondary hover:bg-white hover:text-secondary ">
                Registration
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
          {success && (
            <p className="text-xl text-green-500">
              "Account Successfully Register"
            </p>
          )}
          {error && <p className="text-xl text-red-500">{error}</p>}
          <p className="text-left">
            Already Have an Account ? Please{" "}
            <Link className="text-blue-400 underline" to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
