import React, { useEffect, useReducer } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { auth } from "../Firebase/FireBaseSetup";
// import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword} from "firebase/auth";
import { signOut } from "firebase/auth";
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
    navigate("/Main/Signup");
    dispatch({ type: "SIGNUP" });
  };

  const Loginfn = () => {
    navigate("/Main/Login");
    dispatch({ type: "LOGIN" });
  };

  // useEffect(()=>{
  //   const logoutfn=auth.onAuthStateChanged((user)=>{
  //     if(user){
  //       console.log(user);
  //       navigate("/Main");
  //     }
  //     else{
  //       console.log("hey");
  //       navigate("/");
  //     }
  //   });
  //   return ()=> logoutfn();
  // },[]);

  // useEffect(() => {
    

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
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" p-4">
      <div className=" flex gap-2">
        <input
          style={{ backgroundColor: "#252830" }}
          className=" w-10/12 h-12 p-2 rounded-md"
          type="Search"
          placeholder="🔍 Search CodePen..."
        />
        {auth.currentUser !== null ? (
          <div className=" flex gap-4">
            <button
              onClick={SignOutfn}
              className="border-2 border-green-600 text-white p-2 px-4 h-12 rounded-md"
            >
              Log Out
            </button>
            <img
              className=" w-3/12 h-12 rounded-md"
              src="https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&version=0&width=80&height=80"
            ></img>
          </div>
        ) : (
          <div className=" flex gap-4">
            {!location.pathname.includes("/Main/Signup") && (
              <button
                onClick={SignUpfn}
                className=" bg-green-400 text-gray-950 hover:text-white hover:bg-green-800 p-2 px-4 h-12 rounded-md"
              >
                Sign Up
              </button>
            )}
            {!location.pathname.includes("/Main/Login") && (
              <button
                onClick={Loginfn}
                className=" bg-slate-700 hover:bg-slate-500 text-white p-2 px-4 rounded-md"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </div>
      <div className=" text-white min-h-80 h-auto pt-2">
        <Outlet  />
      </div>
      <Footer />
    </div>
  );
}