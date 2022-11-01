import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Style from "./Style.css";

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.37.0/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">슬기로운 운동 수칙</div>
          </div>
          <div className="mainImageBox">
            <img
              className="mainImage"
              src="https://cagongtv.com/data/editor/2102/b517531821ccc6b1f9729d2ea602ee07_1614309252_6975.png"
              alt="헬스장 이용시 주의 사항"
            />
            <img
              className="mainImage"
              src="https://cagongtv.com/data/editor/2102/b517531821ccc6b1f9729d2ea602ee07_1614309254_675.png"
              alt="수영장 수칙"
            />
          </div>
          <div className="mainImageBox">
            <img
              className="mainImage mb-5"
              src="https://cagongtv.com/data/editor/2102/b517531821ccc6b1f9729d2ea602ee07_1614309256_6186.png"
              alt="야외 운동 수칙"
            />
            <img
              className="mainImage mb-5"
              src="https://cagongtv.com/data/editor/2102/b517531821ccc6b1f9729d2ea602ee07_1614309257_5829.png"
              alt="과한 운동은 금지"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
