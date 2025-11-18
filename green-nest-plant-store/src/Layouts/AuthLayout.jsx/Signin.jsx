import React, { use, useRef, useState } from "react";
import icon from "../../assets/images/leaf.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
  const { signInUser, googleSignIn, resetPassword, setUser, setLoading } =
    use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();
  const [passwordresetMessage, setPasswordResetMessage] = useState("");

  const [visible, setVisibility] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Welcome Back!");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) =>{
        if(error.code === "auth/invalid-credential"){
          toast.error("Invalid email or password");
        }
        else if(error.code === "auth/user-not-found"){
          toast.error("No user found with this email")
        }
        else{
          toast.error(error.message);
        }
      });
  };

  //   sign in with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  //forgot password
  const passwordReset = () => {
    const email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        setPasswordResetMessage(
          "Password reset link sent. Please check your email."
        );
      })
      .catch((error) =>{
        if(error.code === "auth/user-not-found"){
          toast.error("No account exists with this email.");
        }
        else{
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto pt-28 mb-10">
      <title>Sign Up</title>
      <div className="md:w-6/12 mx-auto flex flex-col items-center justify-center py-4 shadow-xl rounded-xl pb-10">
        <img src={icon} alt="" className="w-24" />
        <h1 className="text-2xl font-bold my-4">Sign in to your account</h1>

        <form
          onSubmit={(e) => handleSignIn(e)}
          className="flex flex-col space-y-3 mt-4 w-full px-10"
        >
          {/* email  */}
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="input outline-none w-full"
              placeholder="Your email"
              required
            />
          </div>

          {/* password */}
          <div className="relative flex flex-col">
            <label>Password</label>
            <input
              type={visible ? "text" : "password"}
              name="password"
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

          <div className="mt-2">
            <p
              onClick={() =>
                document.getElementById("password-reset-modal").showModal()
              }
              className="hover:text-red-500 hover:underline cursor-pointer"
            >
              Forgot Password?
            </p>
          </div>

          <button type="submit" className="btn bg-green-600 text-white mt-2">
            Sign In
          </button>
        </form>

        <div className="flex justify-between items-center mt-5 w-full px-10">
          <span className="w-full bg-gray-300 h-px flex-2"></span>
          <span className="w-full text-center flex-1">Or</span>
          <span className="w-full bg-gray-300 h-px flex-2"></span>
        </div>

        <div className="w-full px-10">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white w-full mt-4"
          >
            <FcGoogle className="text-2xl mr-2" />
            Sign In With Google
          </button>

          <p className="text-center mt-8 text-gray-500">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-green-600 hover:underline">
              Sign up here
            </Link>{" "}
          </p>
        </div>
      </div>
      <ToastContainer />

      {/* modal for password reset email  */}
      <dialog id="password-reset-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Please enter the email associated with your account
          </h3>
          <input
            type="email"
            className="input outline-none my-1"
            ref={emailRef}
          />
          <button
            onClick={passwordReset}
            className="btn bg-green-600 text-white my-2"
          >
            Send Password reset link
          </button>
          <p className="text-green-600">{passwordresetMessage}</p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Signin;
