import { createContext, useEffect, useReducer } from "react";
import {AuthReducer } from "./AuthReducer";
 


const INITIAL_STATE = {
     user:  localStorage.getItem("user")||"",
     error: false,
     role: localStorage.getItem("role")||"",
     token: localStorage.getItem("token")||"",
 };


 export const AuthContext = createContext(INITIAL_STATE);

 export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", state.user)
      localStorage.setItem("token",state.token)
      localStorage.setItem("role",state.role)
      console.log("Local user change")
    },[state.user])

    
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          error: state.error,
          role:state.role,
          token:state.token,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };