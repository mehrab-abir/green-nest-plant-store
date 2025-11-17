import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router'

const Signup = () => {
  const [visible, setVisibility] = useState(false);

  return (
    <div className="w-11/12 mx-auto pt-28 mb-10">
      <title>Sign Up</title>
      <div className="md:w-6/12 mx-auto flex flex-col items-center justify-center py-4 shadow-xl rounded-xl pb-10">
        <img src={logo} alt="" className="w-24" />
        <h1 className="text-2xl font-bold my-4">Create Account</h1>
        <p className="text-gray-500">Join GreenNest Today</p>

        <form className="flex flex-col space-y-3 mt-4 w-full px-10">
          {/* name  */}
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id=""
              className="input outline-none w-full"
              placeholder="Your name"
              required
            />
          </div>

          {/* email  */}
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="name"
              id=""
              className="input outline-none w-full"
              placeholder="Your email"
              required
            />
          </div>

          {/* photo url */}
          <div className="flex flex-col">
            <label>Photo URL</label>
            <input
              type="text"
              name="name"
              id=""
              className="input outline-none w-full"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* password */}
          <div className="relative flex flex-col">
            <label>Password</label>
            <input
              type={visible ? "text" : "password"}
              name="name"
              id=""
              className="input outline-none w-full"
              placeholder="Password"
              required
            />
            {visible ? (
              <FaEye
                onClick={() => setVisibility(!visible)}
                className="absolute right-3 top-9 text-xl cursor-pointer z-10"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setVisibility(!visible)}
                className="absolute right-3 top-9 text-xl cursor-pointer z-10"
              />
            )}
          </div>

          <div className="text-sm text-gray-500 mt-2">
            <p className="">Password must contain:</p>
            <ul className="list-disc ml-6">
              <li>At least 6 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
            </ul>
          </div>

          <button type="submit" className="btn bg-green-600 text-white mt-2">
            Sign Up
          </button>
        </form>

        <div className="flex justify-between items-center mt-5 w-full px-10">
          <span className="w-full bg-gray-300 h-px"></span>
          <span className="w-full text-center">Or continue with</span>
          <span className="w-full bg-gray-300 h-px"></span>
        </div>

        <div className="w-full px-10">
          <button className="btn bg-white w-full mt-4">
            <FcGoogle className="text-2xl mr-2" />
            Sign In With Google
          </button>

          <p className="text-center mt-8 text-gray-500">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-green-600 hover:underline">
              Sign in here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
