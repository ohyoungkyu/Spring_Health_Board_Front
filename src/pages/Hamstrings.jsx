import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseHamStrings from "../Swiper/ShowcaseHamStrings";

const Hamstrings = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">햄스트링 운동</div>
          </div>

          <div
            className="flex produce"
            style={{ display: "flex", textAlign: "center" }}
          >
            <img src="https://ifh.cc/g/TdKWgY.png" alt="" />
            <div
              className="produceWrite items-center"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="font-bold ">1. 등과 골반을 지지 해주는 역할을 합니다.</h1>
                <p>
                  햄스트링은 달리기 같은 격렬한 신체 활동 동안 근육 섬유에 무리가 가거나 찢어질 가능성을 낮혀 줍니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  2. 허리 통증을 완화에 도움이 됩니다.
                </h1>
                <p>
                  요통의 원인은 근육의 피로, 근육의 약화를 포함한 질병의 증상일 수 있습니다.
                  허벅지 근육이 이완되면 압박감이 줄어들어 통증이 완화될수 있습니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  3. 무릎 관절 통증 완화에 도움이 됩니다.
                </h1>
                <p>
                  무릎 관절을 가로지르는 햄스트링 힘줄이 팽팽해지면 무릎 뒤쪽에 통증이 느껴질수 있습니다.
                  따라서 꾸준한 햄스트링 운동과 스트레칭이 필요합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">
              운동 종류 및 동영상 소개
            </div>
          </div>

          <div className="ShowcaseContainer">
            <ShowcaseHamStrings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamstrings;
