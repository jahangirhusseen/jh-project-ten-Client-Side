import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/pet-care-logo.jpg";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/add-service"}>Add Service</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="container mx-auto navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost text-xl hover:bg-transparent hover:border-0"
            >
              <img src={logo} className="w-16 h-16 rounded-full" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
                  }
                  className="w-10 h-10 rounded-full"
                />
                <a onClick={handleSignOutUser} className="btn">
                  Sign Out
                </a>
              </>
            ) : (
              <Link to={"/login"} className="btn">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
