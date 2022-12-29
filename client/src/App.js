import Factory from "./pages/Factory/Factory";
import Login from "./pages/Login/Login";
import OC from "./pages/OC/OC";
import SC from "./pages/SC/SC";
import Store from "./pages/Store/Store";
import {Register} from "./pages/Register/Register";
import { AuthContext } from "./context/AuthContext";
import { useEffect,useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginSuccess,LoginStart } from "./context/AuthAction";
import { RouterComponent } from "./router/router";

function App() {
 
  return (
   
      <RouterComponent/>
  );
}

export default App;
