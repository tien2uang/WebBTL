import { createContext, useEffect, useReducer } from "react";
import {AuthReducer } from "./AuthReducer";
 

 const INITIAL_STATE = {
     user: JSON.parse(localStorage.getItem("user")) || null,
     error: false,
     role: null
 };


 export const AuthContext = createContext(INITIAL_STATE);

 export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
      console.log("Local user change")
    },[state.user])

    
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          error: state.error,
          role:state.role,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };