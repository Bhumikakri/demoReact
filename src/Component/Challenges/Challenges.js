import React from "react";
import forest from "../../assets/forest.jpg";
import { auth } from "../Firebase/FireBaseSetup";
import { Link } from "react-router-dom";

const Challenges = () => {
  return (
    <div className=" container md:min-h-full  mt-2 bg-black pt-2">
      <section className=" h-80 flex md:shrink-0 ">
        <div className="w-3/4">
          <h1 className=" text-5xl font-bold mt-6 ml-8">Challenges</h1>
          <p className=" ml-12 mt-5 relative w-full ">
            Challenges are fun opportunities for leveling up your skills by
            building things. Each week, you'll get a new prompt surrounding a
            monthly theme to riff on. The best Pens get picked and featured on
            the homepage!
          </p>
          {auth.currentUser == null && (
            <div className=" ml-12 mt-5 flex items-center justify-center relative w-full h-20 rounded-md bg-gray-700">
              <p className=" w-72 text-center ">
                You'll need a CodePen account to join!{" "}
                <Link
                  className=" text-teal-500 hover:text-white"
                  to="/Main/Login"
                >
                  Log In{" "}
                </Link>{" "}
                or{" "}
                <Link
                  className=" text-teal-500 hover:text-white"
                  to="/Main/Signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          )}
        </div>
        <div className=" w-3/4 h-full ">
          <img className=" w-full h-full" src={forest} />
        </div>
      </section>
      <section className=" h-80 bg-gray-700 border-2 border-gray-50">
        <div>
          <p>THIS MONTH'S THEME</p>
          <h4>February 2024 - Right Now!</h4>
          <h1>Leap Year</h1>
          <p>The February #CodePenChallenge starts now!</p>
          <p>
            2024 is a leap year, a calendar phenomenon that adds an extra day to
            February every four years (with some exceptions, which we'll get
            into later).
          </p>
          <p>
            In honor of this special year, we'll spend all 29 days of February
            leaping around the front-end, playing with the "leap" theme and
            building JavaScript and CSS skills as we go.
          </p>
          <p>
            Every Monday for the next 4 weeks we'll give you a starter template,
            plus lots of ideas and resources to help you leap in!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
