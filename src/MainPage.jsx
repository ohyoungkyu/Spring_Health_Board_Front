import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Style from "./Style.css";
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
};

export default MainPage;
