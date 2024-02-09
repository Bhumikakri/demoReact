import React from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div className=" flex pt-20 justify-center ">
      <div className=" bg-slate-700 p-10 rounded-md w-3/4 text-white text-center">
        <p>
          For search a pen must be{" "}
          <Link className=" text-teal-500 hover:text-white" to="/demo/Login">
            Log In{" "}
          </Link>{" "}
          or{" "}
          <Link className=" text-teal-500 hover:text-white" to="/demo/Signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
