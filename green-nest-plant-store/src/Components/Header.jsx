import React from 'react';
import logo from '../assets/images/logo.png'
import {Link, NavLink} from 'react-router'
import { SlArrowLeftCircle } from "react-icons/sl";
import { closeMenu, openMenu } from '../ResponsiveNav';

const Header = () => {
    return (
      <div className="bg-white py-6 shadow-sm fixed w-full z-50">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <Link to='/' className="flex items-center gap-2">
            <img src={logo} alt="" className="hidden md:block w-[50px]" />
            <h1 className="text-xl md:text-3xl font-bold text-green-600">
              GreenNest
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-lg">
            <NavLink to="/" className="hover:text-green-600">Home</NavLink>
            <NavLink to="/plants" className="hover:text-green-600">Plants</NavLink>
            <NavLink to="/profile" className="hover:text-green-600">My Profile</NavLink>
          </nav>

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

            <div onClick={openMenu} className="flex md:hidden flex-col items-end justify-center space-y-1 ml-2 cursor-pointer" id='switch'>
              <span className="w-6 h-1 bg-black rounded-sm"></span>
              <span className="w-4 h-1 bg-black rounded-sm"></span>
              <span className="w-6 h-1 bg-black rounded-sm"></span>
            </div>
          </div>
        </div>

        {/* navbar in mobile devices */}
        <div className="fixed top-0 right-0 w-[200px] h-screen bg-green-600 opacity-90 p-2 shadow-2xl translate-x-full transition-all duration-300" id='mobileNav'>
          <SlArrowLeftCircle onClick={closeMenu} className="absolute left-6 top-3 text-3xl cursor-pointer text-white rotate-180" id='closeBtn' />
          <div className="mt-12 ml-5 flex flex-col space-y-2">
            <NavLink to="/" className="text-lg text-white" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/plants" className="text-lg text-white" onClick={closeMenu}>
              Plants
            </NavLink>
            <NavLink to="/profile" className="text-lg text-white" onClick={closeMenu}>
              My Profile
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Header;