import React, { useEffect } from "react";
import SideBar from "../Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase/FireBaseSetup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { setSavedCodes } from '../Redux/Slice';
import { onAuthStateChanged } from "firebase/auth";


const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const newImg = "https://th.bing.com/th/id/OIP.1l0xswCuQ7sSb8J9H_A5RwAAAA?w=200&h=200&c=7&r=0&o=5&pid=1.7";

    const newCode = { id: newId, name: newName, image: newImg };

    dispatch(setSavedCodes([...savedCodes, newCode]));

    localStorage.setItem(
      "savedCodes",
      JSON.stringify([...savedCodes, newCode])
    );

    navigate(`/StartCoding/${newId}`);

    }
  };

  useEffect(()=>{
    const logoutfn=auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user);
        navigate("/");
      }
      else{
        console.log("hey");
        navigate("/demo");
      }
    });
    return ()=> logoutfn();
  },[]);

  return (
    <div className="container w-screen flex relative">
      <SideBar StartcodingFn={StartcodingFn} />
      <div
        style={{ backgroundColor: "#131417" }}
        className=" bg-zinc-700 min-h-screen h-auto absolute w-11/12 left-44 "
      >
        <Outlet />
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Main;
