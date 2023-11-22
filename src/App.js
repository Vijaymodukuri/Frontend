import React from "react";
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import Home from './Components/Home';
import Welcome from "./Components/welcome";

 // Import your Home component
import About from "./Components/About"; // Import your About component
import Register from "./Components/Register"; // Import your Register component
import Login from "./Components/Login"; // Import your Login component
import Navbar from "./navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./StudentDashboards/Dashboard";


function App() {
  // const [status, setStatus] = useState("home");

  return (
   <div className="main">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}/>    
      <Route path="/Home" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Info" element={<About/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;