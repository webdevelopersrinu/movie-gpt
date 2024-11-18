import React from "react";
import { CgProfile } from "react-icons/cg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const isSignIn = useSelector((state) => state.user);
  function handeleSingout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div
      className="w-full flex items-center justify-between px-5"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(232,75,23,0) 0%, rgba(0,0,0,0.99781162464986) 100%)",
      }}
    >
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40"
      />
      {isSignIn !== null && (
        <div className="flex items-center justify-between px-5 gap-4">
          <span className="text-white hover:text-red-700 cursor-pointer">
            <CgProfile size={30} />
          </span>
          <span
            onClick={handeleSingout}
            className="pb-2 text-xl font-bold px-4 pt-2 rounded-3xl capitalize bg-red-700 text-white cursor-pointer hover:bg-white hover:text-red-700"
          >
            sign Out
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
