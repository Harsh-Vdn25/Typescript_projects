import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import {Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { UserContext } from "./Context/ContextProvider";
import { useContext, useEffect } from "react";
const App = () => {
  
  const context=useContext(UserContext);
  if(!context){
    throw new Error("SomeComponent must be used within a ContextProvider");
  }
  const {Token,setToken}=context;
  useEffect(()=>{
    const fetchToken=()=>{
      const token=localStorage.getItem("BrainlyToken")||'';
      setToken(token);
    }
    fetchToken();
  },[])
  return (
    <>
    <Routes>
      <Route path="/Signup" element={Token?<Navigate to='/home'/>:<Signup/>} />
      <Route path="/Signin" element={Token?<Navigate to='/home'/>:<Signin/>}/>
      <Route path="/home" element={Token?<Dashboard/>:<Signin/>}/>
    </Routes>
    </>
  );
};

export default App;

