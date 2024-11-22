import React from "react";
import { CgProfile } from "react-icons/cg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { changeSearchState } from "../store/gptSlice";
import logo from "../assets/logo.png";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handeleSingout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }
  const isSignIn = useSelector((state) => state.user);
  const photoURL = useSelector((state) => state.user.photoURL);
  const searchGpt = useSelector((state) => state.gpt.searchGpt);
  return (
    <div className="w-full flex items-center py-2  justify-between px-2 sm:px-5 bg-black">
        <img src={logo} alt="logo" className="w-24 sm:w-40" />
      {isSignIn !== null && (
        <div className="flex items-center justify-between pl-1 sm:px-5  gap-2 sm:gap-4">
          <span
            onClick={() => dispatch(changeSearchState())}
            className=" pb-2 text-sm text-nowrap font-bold px-2 sm:px-4 pt-2 rounded-3xl capitalize bg-gradient-to-r from-[#FF6F0C] to-[#9C7B13] text-white cursor-pointer"
          >
            {searchGpt ? "Home Page" : "✨Ai Search"}
          </span>

          <span
            onClick={handeleSingout}
            className="pb-2 text-sm text-nowrap font-bold  px-2 sm:px-4 pt-2 rounded-3xl capitalize bg-gradient-to-r from-[#FF6F0C] to-[#9C7B13]  text-white cursor-pointer "
          >
            sign Out
          </span>
          <span className="text-[#9C7B13] hover:text-[#FF6F0C]  cursor-pointer ">
            {photoURL === null ? (
              <CgProfile size={30} />
            ) : (
              <img src={photoURL} alt="profile" className="w-8 rounded-full" />
            )}
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
