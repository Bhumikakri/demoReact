import { useState } from "react";
import React from "react";
import HomeSecOne from "./HomeSecOne";
import HomeSecTwo from "./HomeSecTwo";

export default function Home() {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    console.log(buttonId);

  };

  const handleDisableAll = () => {
    setActiveButton(null);
    console.log(null);

  };
  
  return (
    <div className=" w-full max-h-fit flex-col ">
      <HomeSecOne />
      <HomeSecTwo />
      <div className=" w-full h-full ">
        <h3>A front-end environment made for testing and sharing</h3>
        <p>Explore the Editor</p>
        <div>
        <button
        onClick={() => {
          handleButtonClick(1)
        }}
        disabled={activeButton !== null && activeButton !== 1} >
       Button 1 
      </button>
      <button
        onClick={() => {
          handleButtonClick(2)
        }}
        disabled={activeButton !== null && activeButton !== 2} >
       Button 2
      </button>
      <button
        onClick={() => {
          handleButtonClick(3)
        }}
        disabled={activeButton !== null && activeButton !== 3} >
       Button 3 
      </button> 
      <button onClick={handleDisableAll}>Disable All</button>
        </div>
      </div>
    </div>
  );
}
