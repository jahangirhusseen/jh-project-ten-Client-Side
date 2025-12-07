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
        <NavLink to={"/services"}>Pets & Supplies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-service"}>Add Listing</NavLink>
          </li>
          <li>
            <NavLink to={"/my-service"}>My Listings</NavLink>
          </li>
          <li>
            <NavLink to={"/my-orders"}>My Orders</NavLink>
          </li>
        </>
      )}
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
              <h2 className="hidden md:flex">PawMart</h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="flex gap-2">
                  <Link to={"/profile"}>
                    <div className="w-10 rounded-full">
                      <img
                        className="rounded-full"
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
                        }
                      />
                    </div>
                  </Link>
                  <a onClick={handleSignOutUser} className="btn">
                    Log out
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="flex space-x-2">
                  <Link to={"/login"} className="btn">
                    Login
                  </Link>
                  <Link to={"/registration"} className="btn">
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
