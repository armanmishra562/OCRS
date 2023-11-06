import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Errorpage from "./Components/Errorpage";
import Createcomplaint from "./Components/Createcomplaint";
import Viewcomplaints from "./Components/Viewcomplaints";
import Complainantdashboard from "./Components/Complainantdashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Createcomplaint" element={<Createcomplaint />} />
        <Route path="/Viewcomplaints" element={<Viewcomplaints />} />
        <Route
          path="/Complainantdashboard"
          element={<Complainantdashboard />}
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
};

export default App;
