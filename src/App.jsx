import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./store/userSlice";
import Header from "./components/Header";
export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, photoURL } = user;
        dispatch(addUser({ email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <>
      <div className="bg-black w-screen h-screen ">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
