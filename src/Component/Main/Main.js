import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, firestore } from "../Firebase/FireBaseSetup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setSavedCodes } from "../Redux/Slice";
import "../../App.css";
import { doc, setDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

const Main = () => {
  const [isSidemenu, setSidemenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const savedCodes = useSelector((state) => state.code.savedCodes);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const StartcodingFn = () => {
    if (auth.currentUser == null) {
      toast.warning("Please login");
    } else {
      const newId = generateUniqueId();
      const newName = `Code ${savedCodes.length + 1}`;
      const newImg =
        "https://th.bing.com/th/id/OIP.1l0xswCuQ7sSb8J9H_A5RwAAAA?w=200&h=200&c=7&r=0&o=5&pid=1.7";

      const newCode = { id: newId, name: newName, image: newImg };

      dispatch(setSavedCodes([...savedCodes, newCode]));

      localStorage.setItem(
        "savedCodes",
        JSON.stringify([...savedCodes, newCode])
      );

      navigate(`/StartCoding/${newId}`);
    }
  };

  useEffect(() => {
    const logoutfn = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        // console.log(user);
        // location.pathname.includes("/");
        setDoc(doc(firestore,"users",user?.uid), user?.providerData[0]).
        then()
      } else {
        console.log("hey");
        // navigate("/demo");
        location.pathname.includes("/demo");
      }
    });

    return () => logoutfn();
  }, [navigate]);

  if (loading) {
    return (
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    );
  }

  return (
    <div className=" w-full min-h-full h-fit flex flex-col lg:flex-row md:flex-col sm:flex-col relative bg-zinc-700 ">
      <div className={`w-full sm:w-5/12 md:w-full md:h-20 ${isSidemenu ? "lg:w-3" :"lg:w-2/12"} z-40 lg:h-screen sm:h-svh top-0 left-0 sticky`}>
        <SideBar StartcodingFn={StartcodingFn} setSidemenu={setSidemenu} isSidemenu={isSidemenu} />
      </div>
      <div
        style={{ backgroundColor: "#131417" }}
        className={ `min-h-full h-fit sm:w-3/6 md:w-full ${isSidemenu ? "lg:w-full lg:pl-4":"lg:w-10/12 lg:pl-3"}` }
      >
        <Outlet />
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Main;
