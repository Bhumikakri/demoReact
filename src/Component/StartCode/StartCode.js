import React, { useEffect } from "react";
import { auth } from '../Firebase/FireBaseSetup';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MonacoEditor from "@monaco-editor/react";
import { setCodeDetails } from "../Redux/Slice";

function StartCode() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const codeDetails = useSelector((state) => state.code.codeDetails);

  useEffect(() => {
    const savedHtmlCode = localStorage.getItem(`savedHtmlCode${id}`);
    const savedCssCode = localStorage.getItem(`savedCssCode${id}`);
    const savedJsCode = localStorage.getItem(`savedJsCode${id}`);
    const savedCodes = JSON.parse(localStorage.getItem("savedCodes"));

    const code = savedCodes.find((code) => code.id === id);

    if (code) {
      dispatch(setCodeDetails({ ...codeDetails, codeName: code.name }));
    }

    if (savedHtmlCode)
      dispatch(setCodeDetails({ ...codeDetails, htmlCode: savedHtmlCode }));
    if (savedCssCode)
      dispatch(setCodeDetails({ ...codeDetails, cssCode: savedCssCode }));
    if (savedJsCode)
      dispatch(setCodeDetails({ ...codeDetails, jsCode: savedJsCode }));
  }, [dispatch, id]);

  const handleEditorChange = (value, language) => {
    switch (language) {
      case "html":
        dispatch(setCodeDetails({ ...codeDetails, htmlCode: value }));
        break;
      case "css":
        dispatch(setCodeDetails({ ...codeDetails, cssCode: value }));
        break;
      case "javascript":
        dispatch(setCodeDetails({ ...codeDetails, jsCode: value }));
        break;
      default:
        break;
    }
  };

  const handleSaveCode = () => {
    localStorage.setItem(`savedHtmlCode${id}`, codeDetails.htmlCode);
    localStorage.setItem(`savedCssCode${id}`, codeDetails.cssCode);
    localStorage.setItem(`savedJsCode${id}`, codeDetails.jsCode);

    // Save code name along with ID in localStorage
    const savedCodes = JSON.parse(localStorage.getItem("savedCodes")) || [];
    const updatedCodes = savedCodes.map((code) =>
      code.id === id
        ? { ...code, name: codeDetails.codeName || `Code ${id}` }
        : code
    );

    if (!updatedCodes.find((code) => code.id === id)) {
      updatedCodes.push({ id, name: codeDetails.codeName || `Code ${id}` });
    }

    localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));

    navigate("/Main/yourwork");
    alert("Code saved successfully!");
  };

  if (auth.currentUser == null) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ maxWidth: "100vw", padding: "0rem" }}>
      <div
        style={{
          display: "flex",
          marginLeft: "8rem",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "80%",
          height: "2.5rem",
        }}
      >
        <input
          style={{ width: "8rem", height: "2rem" }}
          type="text"
          placeholder="Enter code name"
          value={codeDetails.codeName}
          onChange={(e) =>
            dispatch(
              setCodeDetails({ ...codeDetails, codeName: e.target.value })
            )
          }
        />

        <h3>{codeDetails.codeName}</h3>
        <button onClick={handleSaveCode}>Save Code</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          maxWidth: "100%",
          height: "50%",
        }}
      >
        <MonacoEditor
          height="300px"
          language="html"
          theme="vs-dark"
          value={codeDetails.htmlCode}
          onChange={(value) => handleEditorChange(value, "html")}
        />

        <MonacoEditor
          height="300px"
          language="css"
          theme="vs-dark"
          value={codeDetails.cssCode}
          onChange={(value) => handleEditorChange(value, "css")}
        />

        <MonacoEditor
          height="300px"
          language="javascript"
          theme="vs-dark"
          value={codeDetails.jsCode}
          onChange={(value) => handleEditorChange(value, "javascript")}
        />
      </div>

      <div className="live-preview" style={{ maxWidth: "100%" }}>
        <iframe
          title="Live Preview"
          sandbox="allow-scripts"
          srcDoc={`
            <html>
            <head>
              <style>${codeDetails.cssCode}</style>
            </head>
            <body>
              ${codeDetails.htmlCode}
              <script>${codeDetails.jsCode}</script>
            </body>
            </html>
          `}
          style={{
            maxWidth: "100%",
            width: "99%",
            height: "400px",
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  )
}

export default StartCode;