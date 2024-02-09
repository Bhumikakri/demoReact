import React from "react";
import TitleLogo from "../../assets/original-logo.svg";

const Footer = () => {
  const footerobj = [
    {
      name: "CodePen",
      alldata: [
        {
          da: "About",
        },
        {
          da: "Blog",
        },
        {
          da: "Podcast",
        },
        {
          da: "Documentation",
        },
        {
          da: "Support",
        },
        {
          da: "Advertise",
        },
      ],
    },
    {
      name: "For",
      alldata: [
        {
          da: "Teams",
        },
        {
          da: "Education",
        },
        {
          da: "Privacy",
        },
        {
          da: "Embeds",
        },
        {
          da: "Asset Hosting",
        },
      ],
    },
    {
      name: "Social",
      alldata: [
        {
          da: "YouTube",
        },
        {
          da: "X",
        },
        {
          da: "Instagram",
        },
        {
          da: "Mastodon",
        },
      ],
    },
    {
      name: "Community",
      alldata: [
        {
          da: "Spark",
        },
        {
          da: "Challenges",
        },
        {
          da: "Topics",
        },
        {
          da: "Code of Conduct",
        },
      ],
    },
  ];

  return (
    <div className=" bg-black p-5 flex flex-col lg:flex-row justify-between h-fit">
      <div className=" mt-4 lg:gap-2 gap-10 flex lg:flex-col flex-row flex-wrap justify-between ">
        {footerobj.map((data) => {
          return (
            <div className=" flex flex-col lg:flex-row mt-2 gap-2 ">
              <h1 className=" font-semibold text-white">{data.name}</h1>
              <div className=" flex flex-col lg:flex-row gap-2">
                {data.alldata.map((item) => {
                  return (
                    <div className=" text-slate-500 hover:text-gray-200 cursor-pointer">
                      {item.da}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mt-11 line-clamp-1 ">
        <img className=" w-36 " src={TitleLogo} />
        <p className=" text-right text-slate-400 text-xs w-40">
          ©2024 CodePen Demo or it didn't happen. Terms of Service · Privacy
          Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
