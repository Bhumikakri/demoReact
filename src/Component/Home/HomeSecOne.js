import React from 'react';
import Logo from '../../assets/small-Logo.png';
import HomeImg from '../../assets/HomeImg.jpg';
import { Link } from "react-router-dom";
import { auth } from '../Firebase/FireBaseSetup';

const HomeSecOne=()=>{
  return (
    <div className=" w-full max-h-fit flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className=" w-full lg:w-2/3 pl-7 p-12 space-y-5 text-left">
        <h1 className=" text-white w-10/12 text-4xl font-extrabold flex md:flex-row sm:flex-col lg:flex-row gap-2">
          <img className=" h-12" src={Logo} />
          The best place to build, test, and discover front-end code.
        </h1>
        <p className=" text-left text-gray-300">
          CodePen is a social development environment for front-end designers
          and developers. Build and deploy a website, show off your work, build
          test cases to learn and debug, and find inspiration.
        </p>
        { auth.currentUser == null &&
            <Link className=" text-emerald-500 hover:text-white" to="/demo/signup">
            <button className="mt-5 rounded-md p-3 px-6 border-2 border-emerald-500 hover:border-white">Sign Upfor Free</button>
            </Link>
        }
        
      </div>
      <div className=" lg:w-3/6 h-96">
      <img className=" w-full h-full rounded-lg" src={HomeImg} />
      </div>
    </div>
  )
}

export default HomeSecOne