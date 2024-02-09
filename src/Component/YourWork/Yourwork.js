import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSavedCodes } from "../Redux/Slice";

const Yourwork = () => {
  const dispatch = useDispatch();
  const savedCodes = JSON.parse(localStorage.getItem("savedCodes"))

  const deleteCodeHandler = (id) => {
    const updatedCodes = savedCodes.filter((code) => code.id !== id);
    localStorage.setItem("savedCodes", JSON.stringify(updatedCodes), () => {
      // After updating local storage, dispatch action to update Redux state
      dispatch(setSavedCodes(updatedCodes));
    });
    
  };
  // const varified=localStorage.getItem("checked");
// console.log(varified);
  

  return (
    <div>
        <h1 className=" text-center text-4xl">Your Works</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        { savedCodes.map((savedCode) => (
          <div key={savedCode.id}>
            <div
              style={{
                display: "flex",
                padding: "1rem",
                width: "200px",
                borderRadius: "5px",
                backgroundColor: "black",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to={`/StartCoding/${savedCode.id}`}>
                <div
                  style={{
                    width: "150px",
                    color: "white",
                    backgroundColor: "black",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={savedCode.image}
                    alt="Preview"
                    className=" w-full h-16"
                  />
                  {savedCode.name}
                </div>
              </Link>
              <button onClick={() => deleteCodeHandler(savedCode.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yourwork;
