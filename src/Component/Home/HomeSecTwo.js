import React from 'react';
import Img1 from "../../assets/icone1.svg";
import Img2 from "../../assets/icone2.svg";
import Img3 from "../../assets/icone3.svg";
import backImg from "../../assets/hmShadow1.svg";
import backImg1 from "../../assets/homeShadow.svg";

const HomeSecTwo=()=>{

    const homeObj = [
        {
          icon: Img1,
          title: "Build & Test",
          desc: "Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private.",
        },
        {
          icon: Img2,
          title: "Learn & Discover",
          desc: "Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!",
        },
        {
          icon: Img3,
          title: "Share Your Work",
          desc: "Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.",
        },
      ];

  return (
    <div className=" relative overflow-hidden w-full max-h-fit flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 p-10 ">
        {
          homeObj.map((items)=>{
            return(
              <div className="md:w-5/6 w-10/12 z-40 sm:w-11/12 lg:w-2/6 relative text-white p-5 pt-0 rounded-2xl bg-slate-700">
                <div style={{backgroundColor:"#131417"}} className=" relative rounded-lg -top-7 w-3/12 p-1 ">
                  <img src={items.icon} />
                </div>
                <div className=" space-y-4">
                  <h2 className=" text-2xl font-bold">{items.title}</h2>
                  <p>{items.desc}</p>
                </div>
              </div>
            )
          })
        }
        <img className="w-full h-full absolute -top-72 lg:top-0 right-6 lg:-right-80 z-0" src={backImg} />
        <img className=" w-5/12 h-full absolute -bottom-72 lg:-bottom-36 left-6 lg:-left-20 z-0" src={backImg1} />
      </div>
  )
}

export default HomeSecTwo