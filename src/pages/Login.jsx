import React from "react";
import Header from "../components/Header";
import { validateForm } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [signIn, setSignIn] = React.useState(true);
  const [validate, setValidate] = React.useState({});
  const email = React.useRef(null);
  const password = React.useRef(null);
  const name = React.useRef(null);
  // singin with google
  const provider = new GoogleAuthProvider();

  async function handleGoogleSignIn() {
    const pendingToastId = toast.info("Your request is pending...", {
      position: "top-right",
      autoClose: false,
      closeOnClick: false,
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        toast.dismiss(pendingToastId);
        toast.success("Logged in successfully with Google", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        toast.dismiss(pendingToastId);
        toast.error(
          errorMessage === "Firebase: Error (auth/popup-closed-by-user)."
            ? "Popup closed by user"
            : errorMessage,
          {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          }
        );
      });
  }

  // sign in toast
  function handleToggeleSignIn() {
    setSignIn(!signIn);
  }

  async function handleAuth() {
    const validationErrors = validateForm(name, email, password);
    setValidate(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    const pendingToastId = toast.info("Your request is pending...", {
      position: "top-right",
      autoClose: false, // Set to false to require manual close
      closeOnClick: false,
    });
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          toast.dismiss(pendingToastId);
          toast.success("signed up successfully", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          toast.dismiss(pendingToastId);
          toast.error(
            errorMessage === "Firebase: Error (auth/email-already-in-use)."
              ? "email already in use"
              : errorMessage,
            {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
            }
          );
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.dismiss(pendingToastId);
          toast.success("Login successfully", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.dismiss(pendingToastId);
          toast.error(
            errorMessage === "Firebase: Error (auth/invalid-credential)."
              ? "invalid-credentials"
              : errorMessage,
            {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
            }
          );
          console.log(errorCode + errorMessage);
        });
    }
  }

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')] w-screen h-screen bg-cover bg-center ">
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(232,75,23,0) 50%, rgba(0,0,0,0.99781162464986) 100%)",
        }}
      >
        <Header />
        <div className="bg-black mx-7  sm:w-3/6 lg:w-4/12 text-white sm:mx-auto mt-24 p-5 rounded-lg flex items-start justify-center gap-3 flex-col bg-opacity-70">
          <div className="text-3xl capitalize font-bold py-4">
            {signIn ? "Sign In" : "Sign Up"}
          </div>
          {!signIn && (
            <>
              <input
                ref={name}
                className="w-full rounded-md py-3 px-2 bg-gray-700 placeholder:text-lg  placeholder:capitalize"
                type="text"
                placeholder="Full name"
              />
              {validate.isNameValid && (
                <span className="text-red-500 text-xl">
                  {validate.isNameValid}
                </span>
              )}
            </>
          )}

          <input
            ref={email}
            className="w-full rounded-md py-3 px-2 bg-gray-700 placeholder:text-lg  placeholder:capitalize"
            type="email"
            placeholder="email address"
          />
          {validate.isEmailValid && (
            <span className="text-red-500 text-xl">
              {validate.isEmailValid}
            </span>
          )}

          <input
            ref={password}
            className="w-full rounded-md py-3 px-2 bg-gray-700 placeholder:text-lg  placeholder:capitalize"
            type="password"
            placeholder="password"
          />
          {validate.isPasswordValid && (
            <span className="text-red-500 text-xl">
              {validate.isPasswordValid}
            </span>
          )}

          <button
            className="w-full bg-red-700 py-3 rounded-lg font-bold text-xl"
            onClick={handleAuth}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <div
            className="w-full bg-blue-500 py-3 cursor-pointer rounded-lg font-bold text-xl mt-3 flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <div className="bg-white p-2 rounded-full">
              <FcGoogle />
            </div>
            <span>continue with google</span>
          </div>
          <span
            onClick={handleToggeleSignIn}
            className=" text-sm sm:text-xl my-4 cursor-pointer capitalize"
          >
            {signIn ? "New to Netflix? Sign up now." : "Login to my account"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
