import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FireBaseSetup";
import Logoimg from '../../assets/original-logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  const loginWithEmaiPassword=async()=>{
    await signInWithEmailAndPassword(auth, email, password)
    .then((user)=>{
      if(user){
        console.log(user);
        navigate("/Main/yourwork");
      }
    })
    .catch((err)=>{
      console.log(err.message)
      if(err.message.includes("auth/invalid-credential")){
        toast.error("Ivalide Id : user not found ");
      }else if(err.message.includes("wrong-password")){
        console.log("abhi hua err");
      }else{
        console.log("no avilable");
        toast.error("no avilable");
      }
    })
  }


  return (
    <div>
      <div
        className=" text-lg space-y-5 w-full text-white flex flex-col pt-10"
      >
        <img className="sm  lg:w-2/12" src={Logoimg} alt="logo"/>
        <label>Email</label>
        <input
          className="w-full lg:w-11/12 p-3 rounded-md bg-slate-500"
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          className="w-full lg:w-11/12 p-3 rounded-md bg-slate-500"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <button
          onClick={loginWithEmaiPassword}
          className=" w-6/12 p-3 rounded-md my-3 bg-green-700"
        >
          {" "}
          Login
        </button>
      </div>
      <p className=" mt-5">
      Don't have an acount !<Link className=" text-green-400" to="/demo/Signup">click here</Link> 
      </p>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Login;
