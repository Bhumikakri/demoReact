import React, { useEffect } from 'react';
import google from '../../assets/google-icon.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../Firebase/FireBaseSetup';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{

  const navigate= useNavigate();

  
  useEffect(()=>{
    const logoutfn=auth.onAuthStateChanged((user)=>{
      if(user){
        console.log(user);
        navigate("/Main");
      }
      else{
        console.log("hey");
        navigate("/");
      }
    });
    return ()=> logoutfn();
  },[]);

  const googleSignin=async()=>{
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/Main/yourwork");
      console.log(auth.currentUser);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=' p-3 h-auto flex justify-center'>
      <div style={{backgroundColor:"#5A5F73"}} className=' mt-10  w-2/3 h-fit'>
        <div  className=' h-36 pl-72'>
          <h1 className=' text-6xl font-bold mt-12 pl-4'>Free</h1>
          <p>Welcome to CodePen.</p>
        </div>
        <div className=' flex gap-3'>
          <div className=' bg-white w-11/12 h-lvh p-5 flex-col items-center'>
            <button onClick={googleSignin} className=' bg-slate-800 w-11/12 p-3 rounded-md flex gap-3 mb-3'><img className=' w-1/12' src={google}/>Sign Up with Google</button>
            <button disabled className=' bg-slate-500 w-11/12 p-3 rounded-md flex gap-3 mb-3'>Sign Up with GitHub</button>
            <button disabled className=' bg-slate-500 w-11/12 p-3 rounded-md flex gap-3 mb-3'>Sign Up with Facebook</button>
            <h2 className=' text-gray-600'>or,</h2>
            <button className=' bg-slate-800 w-6/12 p-3 rounded-md my-3'>Sign Up with Email</button>
          </div>
          <div style={{backgroundColor:"#444857"}}  className=' p-4 w-4/6 h-lvh'>
            <h1>Free</h1><hr/>
            <p>Deploy<span>0</span></p>
            <p>Deploy<span>0</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp