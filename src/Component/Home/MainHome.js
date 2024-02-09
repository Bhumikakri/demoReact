import React, { useReducer } from "react";
import { Outlet, json, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { auth } from "../Firebase/FireBaseSetup";
// import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword} from "firebase/auth";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {useAuthContext} from "../Context/Authcontext";

const initialstate = {
  isSing: false,
  isLogin: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { isSign: true, isLogin: false };
    case "LOGIN":
      return { isSign: false, isLogin: true };
    default:
      return state;
  }
};

export default function MainHome() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  // const { state, dispatch }  = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const SignUpfn = () => {
    navigate("/demo/Signup");
    dispatch({ type: "SIGNUP" });
  };

  const Loginfn = () => {
    navigate("/demo/Login");
    dispatch({ type: "LOGIN" });
  };
    
  //   setPersistence(auth, browserSessionPersistence)
  //     .then(() => {
  //       console.log('Auth persistence set successfully');
  //       signInWithEmailAndPassword(auth, email, password)
  //         .then((userCredential) => {
  //           const user = userCredential.user;
  //           console.log('User signed in:', user);
  //         })
  //         .catch((error) => {
  //           // Handle sign-in errors
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.error('Sign-in error:', errorMessage);
  //         });
  //     })
  //     .catch((error) => {
  //       // Handle persistence setting error
  //       console.error('Error setting auth persistence:', error);
  //     });
  // }, []); // Run the effect only once when the component mounts

  const SignOutfn = async () => {
    try {
      await signOut(auth);
      navigate("/demo");
    } catch (error) {
      console.error(error);
    }
  };

  const checkfocus=()=>{
    if(auth.currentUser == null){
      toast.warning("oohnoo their is no pens ");
      toast.warning("login please... ");
    }
    // console.log("search focus");
  }

  const searchYourPens=(val)=>{

  }

  return (
    <div className=" p-4 ">
      <div className=" flex gap-3">
        <input
          style={{ backgroundColor: "#252830" }}
          className=" flex flex-shrink flex-grow lg:w-10/12 h-12 p-2 rounded-md"
          type="Search"
          onFocus={checkfocus}
          onChange={(e)=>searchYourPens(e.target.value)}
          placeholder="🔍 Search CodePen..."
        />
        {auth.currentUser != null ? (
          <div className=" flex gap-4">
            <button
              onClick={SignOutfn}
              className="border-2 lg:text-lg lg:pt-1  md:text-sm  text-nowrap border-green-600 text-white p-2 px-2 flex sm:flex-shrink h-12 rounded-md "
            >
              Log Out
            </button>
            <img
              className="  h-12 rounded-md"
              src={auth.currentUser && auth.currentUser.photoURL!==null ? auth.currentUser.photoURL :"https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80"}
            ></img>
          </div>
        ) : (
          <div className=" flex flex-grow gap-3">
            {!location.pathname.includes("/demo/Signup") && (
              <button
                onClick={SignUpfn}
                className=" bg-green-400 md:text-sm text-nowrap sm:text-xs text-gray-950 hover:text-white hover:bg-green-800 p-2 px-3 h-12 rounded-md"
              >
                Sign Up
              </button>
            )}
            {!location.pathname.includes("/demo/Login") && (
              <button
                onClick={Loginfn}
                className=" bg-slate-700 md:text-sm text-nowrap  sm:text-xs hover:bg-slate-500 text-white p-2 px-3 rounded-md"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>
      <div className=" text-white lg:min-h-screen  w-full h-auto pt-2">
        <Outlet  />
      </div>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}