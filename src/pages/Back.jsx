import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseBack from "../Swiper/ShowcaseBack";

const Back = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">등 운동</div>
          </div>

          <div className="flex produce">
            <img src="https://ifh.cc/g/OL9sll.png" alt="" />
            <div
              className="produceWrite"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="text-center font-bold">
                  1. 허리, 목 디스크 예방 ​
                </h1>
                <p>
                  허리, 목을 지탱해주는 근육을 강화시켜줘 자세를 바르게 유지할
                  수 있도록 도와줍니다.
                </p>
                <h1 className="text-center font-bold">
                  <br></br>
                  2. 말린 어깨, 굽은 등을 바르게
                </h1>

                <p>
                  잦은 컴퓨터, 스마트폰 사용으로 인해 앞으로 말린 어깨 및 굽은
                  등을 당겨 펴줍니다.
                </p>
                <h1 className="text-center font-bold">
                  <br></br>
                  3. 신체 코어 강화
                </h1>
                <p>
                  몸을 지탱해주는 코어 근육을 강화시켜 몸의 밸런스를 맞춰주고
                  안정성을 높여줍니다.
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
            <ShowcaseBack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back;
