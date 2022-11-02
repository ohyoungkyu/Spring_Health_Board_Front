import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Abs from "./pages/Abs";
import Arm from "./pages/Arm";
import Back from "./pages/Back";
import Calf from "./pages/Calf";
import Chest from "./pages/Chest";
import Hamstrings from "./pages/Hamstrings";
import Shoulder from "./pages/Shoulder";
import Thigh from "./pages/Thigh";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/chest" element={<Chest />}></Route>
        <Route path="/Back" element={<Back />}></Route>
        <Route path="/Shoulder" element={<Shoulder />}></Route>
        <Route path="/Arm" element={<Arm />}></Route>
        <Route path="/Thigh" element={<Thigh />}></Route>
        <Route path="/Calf" element={<Calf />}></Route>
        <Route path="/Hamstrings" element={<Hamstrings />}></Route>
        <Route path="/Abs" element={<Abs />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
