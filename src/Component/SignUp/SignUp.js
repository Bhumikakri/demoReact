import React, { useState } from "react";
import google from "../../assets/google-icon.png";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/FireBaseSetup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [openPage, setOpenPage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  // const[getEmailvalidation,setGetEmailValidation] = useState(false);
  const navigate = useNavigate();

  const createNewUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        if (userCred) {
          console.log(userCred);
        }
      })
      .catch((err) => console.log(err));
  };

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // await signInWithRedirect()
      navigate("/Main/yourwork");
      console.log(auth.currentUser);
    } catch (error) {
      console.error(error);
    }
  };

  const Signpagehandler = () => {
    setOpenPage((prev) => !prev);
    console.log(openPage);
  };

  return (
    <div className=" p-3 h-fit flex justify-center">
      <div
        style={{ backgroundColor: "#5A5F73" }}
        className=" mt-10 w-2/3 md:h-fit sm:h-fit"
      >
        <div className="h-36 pl-6 lg:pl-72 ">
          <h1 className=" text-6xl font-bold mt-12 pl-4">Free</h1>
          <p>Welcome to CodePen.</p>
        </div>
        <div className=" flex-col lg:flex-row flex gap-3">
          <div className="  w-full lg:w-11/12 h-10/12 p-5 flex-col items-center bg-white">
            <button
              onClick={googleSignin}
              className=" bg-slate-800 w-full lg:w-11/12 p-3 rounded-md flex gap-3 mb-3"
            >
              <img className=" w-1/12" src={google} alt="google" />
              Sign Up with Google
            </button>
            <button
              disabled
              className=" bg-slate-500 w-full lg:w-11/12 p-3 rounded-md flex gap-3 mb-3"
            >
              Sign Up with GitHub
            </button>
            <button
              disabled
              className=" bg-slate-500 w-full lg:w-11/12 p-3 rounded-md flex gap-3 mb-3"
            >
              Sign Up with Facebook
            </button>
            <h2 className=" text-gray-600">or,</h2>
            <button
              onClick={Signpagehandler}
              className=" bg-slate-800 w-6/12 p-3 rounded-md my-3"
            >
              Sign Up with Email
            </button>
            <div
              className={`${
                openPage ? "visible block" : "hidden"
              } text-gray-700 text-lg space-y-5 w-full`}
            >
              <label>Email</label>
              <input
                className={`${
                  openPage ? "visible block" : "hidden"
                }w-full lg:w-11/12 p-3  text-white rounded-md bg-slate-500`}
                type="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>password</label>
              <input
                className="w-full text-white lg:w-11/12 p-3 rounded-md bg-slate-500"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
              />
              <button
                onClick={createNewUser}
                className=" text-white w-6/12 p-3 rounded-md my-3 bg-green-700"
              >
                {" "}
                Submite
              </button>
            </div>
            <p className=" text-slate-900 mt-5">
              By signing up, you agree to CodePen's Terms of Service , Code of
              Conduct , and Privacy Policy .
            </p>
          </div>
          <div
            style={{ backgroundColor: "#444857" }}
            className="h-10/12 p-4 w-full lg:w-3/6 h-fit"
          >
            <h1 className=" font-bold text-lg">Free</h1>
            <hr />
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <br />
            <h1 className=" font-bold text-lg">PEN & PROJECT VIEWS</h1>
            <hr />
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <br />
            <h1 className=" font-bold text-lg">PEN FEATURES</h1>
            <hr />
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <br />
            <h1 className=" font-bold text-lg">ASSET HOSTING</h1>
            <hr />
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <p className=" flex justify-between">
              Deploy<span>0</span>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
