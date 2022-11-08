import React from "react";
import MetaTag from "../Components/MetaTag";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Style from "../Style.css";
import ShowcaseShoulder from "../Swiper/ShowcaseShoulder";

const Shoulder = () => {
  return (
    <div>
      <MetaTag />
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <div style={{ height: "inherit", width: "100vw" }}>
          <div className="w-full text-center h-24 mt-10">
            <div className="mainbutton font-semibold">어깨 운동</div>
          </div>

          <div className="flex produce">
            <div>
              <img
                src="https://ifh.cc/g/RFC54C.png"
                alt=""
                style={{ width: "347px", height: "307px" }}
              />
              <img
                src="https://ifh.cc/g/QtLCc3.png"
                alt=""
                style={{ width: "347px", height: "307px" }}
              />
            </div>
            <div
              className="produceWrite"
              style={{ alignItems: "center", display: "inherit" }}
            >
              <div className="flex-col">
                <h1 className="text-center font-bold">
                  1. ​라운드 숄더를 예방 할 수 있다.
                </h1>
                <p>어깨 근육을 강화하여 어깨가 말리는 현상을 방지할 수 있다.</p>
                <h1 className="text-center font-bold">
                  <br></br>
                  2. 어꺠충돌증후군을 미연에 방지할 수 있다.
                </h1>

                <p>
                  어깨충돌증후군은 노화로 인해 근력이 약해지고, 무리하게 어깨를
                  사용해 발생한다는 점에선 퇴행성질환에 해당됩니다. 다만,
                  어깨충돌증후군의 가장 큰 발생원인이 라운드숄더와 밀접한 관련이
                  있다는 점에서 근육을 키워 미연에 방지 할 수 있다.
                </p>
                <h1 className="text-center font-bold">
                  <br></br>
                  3. 외형적으로 큰 효과를 볼 수 있다.
                </h1>
                <p>
                  어깨가 좁으면 사람이 작아보이고 보기에 말라보이는 현상이
                  있는대, 어깨근육을 키우면 이런 현상을 예방 할 수 있다.
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
            <ShowcaseShoulder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoulder;
