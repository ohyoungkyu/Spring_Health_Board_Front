import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseChest from "../Swiper/ShowcaseChest";

const Chest = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">가슴 운동</div>
          </div>

          <div
            className="flex produce"
            style={{ display: "flex", textAlign: "center" }}
          >
            <img src="https://ifh.cc/g/lt2bbM.png" alt="" />
            <div
              className="produceWrite items-center"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="font-bold ">1. 허리, 목 디스크를 예방합니다.</h1>
                <p>
                  허리,목을 지탱해주는 근육을 강화시켜줘서 자세를 바르게 유지할
                  수 있도록 도와줍니다!
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  2. 가슴 운동은 호흡을 원활하게 해 줍니다
                </h1>
                <p>
                  3,4,5번 갈비뼈에 붙어있는 작은 가슴근육운 호흡의 질을
                  개선하는데 특히 유용하게 사용되는데, 당신이 숨을 들이쉴 때
                  마다 작은 가슴근육들이 늘어나면서 흉곽의 확장을 도와줍니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  3. 일상생활을 편하게 만들어 줍니다
                </h1>
                <p>
                  가방을 들어올리거나 물건을 옮길 떄, 무거운 문을 열고 닫을 때
                  필요한 힘을 내는 근육은 바로 가슴 근육입니다. 그래서 가슴
                  근육을 단련하지 않은 사람들은 장바구니를 옮기는 등의 일상
                  생활에서도 불편감을 느끼기 쉽습니다.
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
            <ShowcaseChest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chest;
