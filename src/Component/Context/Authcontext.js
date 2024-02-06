import { createContext, useContext, useReducer } from "react";

const initialState = {
  // isSing: false,
  // isLogin: false,
  // val=0,
};

const AuthContext = createContext();

const AuthappProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    // case "SIGNUP":
    //   return {...state, isSign: true, isLogin: false };
    // case "LOGIN":
    //   return {...state, isSign: false, isLogin: true };
    default:
      return state;
  }
};
export { AuthappProvider, useAuthContext };