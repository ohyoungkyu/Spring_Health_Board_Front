import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseCalf from "../Swiper/ShowcaseCalf";

const Calf = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">종아리 운동</div>
          </div>

          <div
            className="flex produce"
            style={{ display: "flex", textAlign: "center" }}
          >
            <img src="https://ifh.cc/g/2oCMbB.png" alt="" />
            <div
              className="produceWrite items-center"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="font-bold ">1. 제 2의 심장이라 불릴 정도로 심장건강과 큰 관계가 있습니다.</h1>
                <p>
                  종아리는 우리 신체의 최하단부에 위치하고 있기 때문에 중력의 영향을 크게 받습니다. 그로 인해,
                  심장에서 퍼져 나간 혈액이 종아리에 많이 몰리는 현상이 일어납니다.
                  이때, 잘 발달된 종아리가 몰려 있는 혈액을 다시 심장으로 보내주는 펌프 역할을 하기 때문입니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  2. 심혈관질환을 예방할 수 있습니다.
                </h1>
                <p>
                  폐경기를 겪는 중년 여성일수록 여성호르몬인 에스트로겐의 감소로 심혈관 질환 위험이 높아진다. 중년 여성은 근력 운동에 신경 쓰면 심혈관질환 위험까지 낮출 수 있습니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  3. 기립성 저혈압과 골절 위험을 예방합니다.
                </h1>
                <p>
                  종아리 근육이 부족하면 다리 정맥에서 심장으로 피를 올려주는 힘이 약해서 기립성 저혈압이 생길 수 있다. 순간적으로 뇌에 혈액공급이 부족해 어지럼을 느끼고, 심하면 넘어져 골절이 될 수도 있다. 종아리 근육을 키워주면 기립성 저혈압과 골절 위험 등 여러 질병의 예방까지 가능합니다.
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
            <ShowcaseCalf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calf;
