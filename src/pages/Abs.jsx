import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseAbs from "../Swiper/ShowcaseAbs";

const Abs = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">복근 운동</div>
          </div>

          <div
            className="flex produce"
            style={{ display: "flex", textAlign: "center" }}
          >
            <div>
              <img
                src="https://ifh.cc/g/PpqQm4.png"
                alt=""
                style={{ width: "347px", height: "307px" }}
              />
              <img
                src="https://ifh.cc/g/txtSRO.png"
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
                  1. 허리디스크와 같은 척추관련 질환을 예방 할 수 있습니다.
                </h1>
                <p>
                  복근이 우리 몸의 척주(vertebral column)를 바로 세워주고, 늑골(rib)의 안정감을 주는데 있어 매우 중요한 역할을 하기 때문입니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  2. 복근이 약해질 경우 기초대사율을 떨어트려 지방이 더 붙기 쉬운 몸매가 될 수 있습니다.
                </h1>
                <p>
                  마른 체형인데도 불구하고 아랫배만 볼록 나오는 현상이 있으시다면
                  복근이 약해져 생기는 현상일 수 있으니 제대로 체형 분석을 한 후 복근이 탄탄해질 수 있도록 복근 강화
                  운동을 해주시는 것이 좋습니다.
                </p>
                <h1 className="text-center font-bold">
                  <br />
                  3. 복근이 약해질 경우에는 배근에도 영향을 크게 미칠 수가 있습니다.
                </h1>
                <p>
                  이로 인해 자세가 휘면서 요통이 발생될 수 있어 별다른 원인 없이 갑작스러운 허리 통증이 발생할 수 있습니다.
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
            <ShowcaseAbs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abs;
