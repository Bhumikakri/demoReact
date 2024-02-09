import React from "react";
import TitleLogo from "../../assets/codepen-logo-icon-png-svg.png";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/FireBaseSetup";
import Logo from "../../assets/small-Logo.png";

const SideBar = (prop) => {
  return (
    <div
      style={{ backgroundColor: "#1E1F26" }}
      className=" h-full sm:w-full md:overflow-hidden sm:overflow-y-scroll md:w-full lg:flex-col lg:justify-start  flex md:items-start sm:items-center sm:justify-around sm:flex-row md:flex-row p-3 text-white"
    >
      <div
        onClick={() => prop.setSidemenu(!prop.isSidemenu)}
        className="   lg:w-7 lg:h-7 lg:rounded-tr-lg lg:rounded-br-lg lg:top-5 lg:absolute hidden lg:-right-6  lg:flex justify-center cursor-pointer item-center "
      >
        <img className="  w-full h-full rounded-tr-lg rounded-br-lg" src="https://www.svgrepo.com/show/168299/right-arrow.svg"/>
      </div>
      <Link to={auth.currentUser == null ? "/demo" : "/"}>
        <div>
          <img
            className="  sm:hidden hidden w-full 2xl:block lg:block md:hidden"
            src={TitleLogo}
          />
        </div>
      </Link>
      <Link to={auth.currentUser == null ? "/demo" : "/"}>
        <img
          src={Logo}
          className=" md:w-1/12 w-4/12 sm:w-5/12 visible lg:hidden sm:block md:block"
        />
      </Link>
      <div className=" flex lg:flex-col gap-5 items-start mt-1 lg:mt-4">
        <h6 className=" hidden lg:block text-xs mb-2 font-semibold text-stone-400 ml-3">
          TRY OUR ONLINE EDITOR
        </h6>

        <div>
          <button
            onClick={prop.StartcodingFn}
            className=" bg-black text-nowrap lg:text-wrap text-white border-2 border-red-500 lg:py-3 text-base font-semibold px-2 lg:m-3 rounded-md"
          >
            Start Coding
          </button>
        </div>

        {auth.currentUser == null && (
          <Link to="/demo/Search/Pens">
            <div className=" hover:text-orange-300 text-nowrap lg:ml-3 lg:mt-3">
              Search Pens
            </div>
          </Link>
        )}
        <Link to="/Main/challenges">
          <div className="  hover:text-green-300 text-nowrap lg:ml-3 lg:mt-3">
            Challenges
          </div>
        </Link>
        <Link to="/Main/sparks">
          <div className="  hover:text-blue-300 text-nowrap lg:ml-3 lg:mt-3">
            Spark
          </div>
        </Link>
        {auth.currentUser && (
          <Link to="/Main/yourwork">
            <div className=" hover:text-lime-300 text-nowrap lg:ml-3 lg:mt-3">
              YourWork
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
