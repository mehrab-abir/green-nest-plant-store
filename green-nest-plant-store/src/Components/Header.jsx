import React, { use, useState } from "react";
import logo from "../assets/images/logo.png";
import defaultAvatar from "../assets/images/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { SlArrowLeftCircle } from "react-icons/sl";
import { AuthContext } from "../Authentication/AuthContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const [openDropdown, setOpenDropDown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.info("Signed out", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => toast.error(error.message));
  };

  const userAvatar =
    user?.photoURL || user?.providerData?.[0]?.photoURL || defaultAvatar;

  return (
    <div className="bg-white py-6 shadow-sm fixed w-full z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div to="/" className="flex items-center gap-2">
          <div
            onClick={() => setOpenMenu(true)}
            className="flex md:hidden flex-col items-end justify-center space-y-1 ml-2 cursor-pointer"
          >
            <span className="w-6 h-1 bg-black rounded-sm"></span>
            <span className="w-4 h-1 bg-black rounded-sm"></span>
            <span className="w-6 h-1 bg-black rounded-sm"></span>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="hidden md:block w-[50px]" />
            <h1 className="text-xl md:text-3xl font-bold text-green-600">
              GreenNest
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-lg">
          <NavLink to="/" className="hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/plants" className="hover:text-green-600">
            Plants
          </NavLink>
          <NavLink to="/profile" className="hover:text-green-600">
            My Profile
          </NavLink>
        </nav>

        <div className="relative">
          {user ? (
            <div
              onClick={() => setOpenDropDown(!openDropdown)}
              className="cursor-pointer flex items-center"
            >
              <img
                src={userAvatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <IoMdArrowDropdown />
            </div>
          ) : (
            <div className="space-x-2 flex">
              <Link
                to="/auth/signin"
                className="btn text-green-500 border border-green-500 bg-white px-2 md:px-4"
              >
                Sign In
              </Link>
              <Link
                to="/auth/signup"
                className="btn bg-green-600 text-white px-2 md:px-4"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* user dropdown */}
          <div
            className={`absolute bg-white min-w-52 py-2 px-5 flex flex-col -right-10 rounded-xl shadow-lg transition-all duration-300 ${
              openDropdown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-lg font-semibold">
              {user ? `${user.displayName}` : ""}
            </p>
            <Link to="/profile" className="text-lg my-2 hover:underline">
              My Profile
            </Link>
            <button
              onClick={() => {
                handleSignOut();
                setOpenDropDown(!openDropdown);
              }}
              className="btn bg-white border-red-500 text-red-500 mt-2 py-0 hover:bg-red-500 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* navbar in mobile devices */}
      <div
        className={`fixed top-0 left-0 w-[200px] h-screen bg-green-700 opacity-95 p-2 shadow-2xl ${
          openMenu ? "" : "-translate-x-full"
        } transition-all duration-300`}
      >
        <SlArrowLeftCircle
          onClick={() => setOpenMenu(false)}
          className="absolute right-6 top-3 text-3xl cursor-pointer text-white"
        />
        <div className="mt-12 ml-5 flex flex-col space-y-2">
          <NavLink
            to="/"
            className="text-lg text-white"
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className="text-lg text-white"
            onClick={() => setOpenMenu(false)}
          >
            Plants
          </NavLink>
          <NavLink
            to="/profile"
            className="text-lg text-white"
            onClick={() => setOpenMenu(false)}
          >
            My Profile
          </NavLink>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Header;
