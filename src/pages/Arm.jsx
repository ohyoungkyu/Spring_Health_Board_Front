import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseArm from "../Swiper/ShowcaseArm";

const Arm = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">팔 운동</div>
          </div>

          <div
            className="flex produce"
            style={{ display: "flex", textAlign: "center" }}
          >
            <div>
              <img
                src="https://ifh.cc/g/dj4DCM.png"
                alt=""
                style={{ width: "347px", height: "307px" }}
              />
              <img
                src="https://ifh.cc/g/sQzO7O.png"
                alt=""
                style={{ width: "347px", height: "307px" }}
              />
            </div>
            <div
              className="produceWrite items-center"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="font-bold ">
                  1. 외모를 개선하는데 도움이 됩니다.
                </h1>
                <p>
                  팔 운동 필요성은 외모를 개선하는데 도움이 됩니다. 남성은
                  강인하고 남자다운 외모를 어필 할 수 있고 여성은 탄력적인
                  라인으로 여성성을 부각할 수 있습니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  2. 일상 생활의 부상을 예방해줍니다
                </h1>
                <p>
                  팔 운동은 강인하고 듬직하게 보여주는 것 뿐만 아니라 일상
                  생활에서 여러 종류의 부상을 방지해주는 역할을 합니다. 그리고
                  상체 및 하체 근육을 발달 시키기 위한 보조 역할을 제대로 하기
                  때문에 팔 운동 필요성이 부각되고 있습니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  3. 모든 생활에서 팔이 사용되고 있습니다
                </h1>
                <p>
                  식사를 할 때도 팔이 사용되고, 핸드폰을 볼 때도 팔이 사용되고
                  있습니다. 우리 몸에서 팔 근육은 어떤 행동을 해도 모두 사용되고
                  있습니다. 팔 운동 필요성은 굳이 팔 운동을 하지 않더라도 일상
                  생활에서 이미 팔 근육이 많이 사용되고 있습니다.
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
            <ShowcaseArm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arm;
