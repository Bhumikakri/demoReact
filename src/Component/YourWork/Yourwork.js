import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSavedCodes } from "../Redux/Slice";

const Yourwork = () => {
  const dispatch = useDispatch();
  const savedCodes = useSelector((state) => state.code.savedCodes);

  const deleteCodeHandler = (id) => {
    const updatedCodes = savedCodes.filter((code) => code.id !== id);
    dispatch(setSavedCodes(updatedCodes));
    localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
  };

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
        {savedCodes.map((savedCode) => (
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
                    style={{ width: "100%", height: "70px" }}
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
