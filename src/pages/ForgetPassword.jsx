import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { userEmail } = useParams();
  const { error, forgetUserPass } = use(AuthContext);
  const navigate = useNavigate();

  const HandleForgetPass = (e) => {
    e.preventDefault();
    forgetUserPass(userEmail)
      .then(() => {
        alert(`Check this mail ${userEmail}`);
        window.open("https://mail.google.com/mail/u/0");
        navigate("/login", { replace: true });
      })
      .catch((error) => toast.warning(error.message));
  };
  return (
    <>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Forget Your PassWord
          </h1>
          <form className="mt-3 " onSubmit={HandleForgetPass}>
            <fieldset className="fieldset gap-4">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={userEmail}
                className="input"
                placeholder="Email"
              />
              <div></div>
              <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                Sent Email
              </button>
            </fieldset>
          </form>
          {error && <p className="text-xl text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
