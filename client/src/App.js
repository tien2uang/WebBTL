import Factory from "./pages/Factory/Factory";
import Login from "./pages/Login/Login";
import OC from "./pages/OC/OC";
import SC from "./pages/SC/SC";
import Store from "./pages/Store/Store";
import SignUp from "./pages/Signup/Signup";
import { AuthContext } from "./context/AuthContext";
import { useEffect,useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginSuccess } from "./context/AuthAction";


// var user="ui";
// var role="Sto";




function App() {
  const { user,role, dispatch } = useContext(AuthContext);

 

  useEffect(()=>{
    console.log(user,role);
    dispatch(LoginSuccess(["SeC01","SeC"]));
    
  },[]);

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        {role=="SeC" && <Route path="/home" element={user!=null  ? <SC />: <Login />} /> }
        {role=="OpC" && <Route path="/home" element={user!=null  ? <OC />: <Login />} /> }
        {role=="Sto" && <Route path="/home" element={user!=null  ? <Store />: <Login />} /> }
        {role=="Fac" && <Route path="/home" element={user!=null  ? <Factory />: <Login />} /> }

        {/* <Route path="/home" element={user!=null && role=="SeC"  ? <Navigate to="/home/sc" />: <Login />} />
        <Route path="/home" element={user!=null && role=="OpC"  ? <Navigate to="/home/oc" />: <Login />} />
        <Route path="/home" element={user!=null && role=="Sto"  ? <Navigate to="/home/store" />: <Login />} />
        <Route path="/home" element={user!=null && role=="Fac"  ? <Navigate to="/home/factory" />: <Login />} /> */}

        {/* <Route path="/home/sc" element={user!=null  ? <SC /> : <Login />} />
        <Route path="/home/oc" element={user!=null  ? <OC /> : <Login />} />
        <Route path="/home/store" element={user!=null  ? <Store /> : <Login />} />
        <Route path="/home/factory" element={user!=null  ? <Factory /> : <Login />} /> */}

        

        <Route path="/signIn" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signUp" element={user ? <Navigate to="/home" /> : <SignUp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
