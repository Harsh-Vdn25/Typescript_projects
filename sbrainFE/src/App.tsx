import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import {Routes,Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const App = () => {
  // const navigate=useNavigate();
  return (
    <>
    <Routes>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/home" element={<Dashboard/>}/>
    </Routes>
    </>
  );
};

export default App;
