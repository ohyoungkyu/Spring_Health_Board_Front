import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseThigh from "../Swiper/ShowcaseThigh"

const Thigh = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">허벅지 운동</div>
          </div>

          <div className="flex produce">
            <img src="https://ifh.cc/g/ccTpqd.png" alt="" />
            <div
              className="produceWrite"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="text-center font-bold">
                  1. 전신 근육량중 가장 많은 부분을 차지한다.
                </h1>
                <p>
                  사람에 따라선 전신 근육량의 60~70%가 몰려있는 만큼 건강에도 지대한 영향을 끼치게 됩니다.
                </p>
                <h1 className="text-center font-bold">
                  <br></br>
                  2. 심장병의 발병 확률과 사망 확률을 줄일 수 있다.
                </h1>

                <p>
                  덴마크의 코펜하겐대학교 연구팀은 허벅지 둘레가 얇은 사람들은 허벅지가 비교적 두꺼운 사람들에 비해 심장병이 발병하거나 사망할 위험성이 2배 가량 높은 것으로 나타났다고 발표한 바 있다.
                </p>
                <h1 className="text-center font-bold">
                  <br></br>
                  3. 남아도는 열량을 태우는 역할을 한다.
                </h1>
                <p>
                  우리몸의 근육중 50% 이상을 차지하기 때문에 몸속 남은 열량을 태우는 역할을 합니다.
                  허벅지 근육을 발달시키면 단기적인 효과가 아닌 신진대사율, 기초대사량을 높여 살이 빠지기 쉬운 타입으로 변화시켜줍니다.
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
            <ShowcaseThigh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thigh;
