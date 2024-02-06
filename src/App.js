import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main/Main";
import MainHome from "./Component/Home/MainHome";
import SearchPage from "./Component/SearchPage/SearchPage";
import Challenges from "./Component/Challenges/Challenges";
import Spark from "./Component/Spark/Spark";
import StartCoding from "./Component/StartCode/StartCode";
import Home from "./Component/Home/Home";
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/Login/Login";
import { Provider } from "react-redux";
import store from "./Component/Redux/store";
import Yourwork from "./Component/YourWork/Yourwork";
// import Layout from "./Component/Layout/Layout";
// import { AuthappProvider } from "./Component/Context/Authcontext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/demo",
          element: <MainHome />,
          children:[
            {
              path: "/demo",
              element: <Home />,
            },
            {
              path: "demo/Search/Pens",
              element: <SearchPage />,
            },
            {
              path: "demo/challenges",
              element: <Challenges />,
            },
            {
              path: "demo/sparks",
              element: <Spark />,
            },
          ]
        },
        //after login --------
        {
          path: "/",
          element: <MainHome />,
          children:[
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/Main/Search/Pens",
              element: <SearchPage />,
            },
            {
              path: "/Main/challenges",
              element: <Challenges />,
            },
            {
              path: "/Main/sparks",
              element: <Spark />,
            },
            {
              path: "/Main/Signup",
              element:<SignUp />,
            },
            {
              path: "/Main/Login",
              element: <Login />,
            },
            {
              path: "/Main/yourwork",
              element: <Yourwork/>,
            },

          ]
        },
      ],
    },
    {
      path:"/StartCoding/:id",
      element:<StartCoding />
    }
  ]);

  return (
    <div className="App">
      <Provider store={store} >
      <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
