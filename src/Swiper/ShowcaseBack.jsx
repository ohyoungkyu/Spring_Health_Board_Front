import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseBack = () => {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              랫 풀 다운
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://post-phinf.pstatic.net/MjAxNzA2MDlfMzgg/MDAxNDk2OTk1Mjg0NDY2.43Zwc2AgiFHAX7CxvxVSdHG6-s0aVEdYpMHi6kGUYQog._J6W0cQ64GrM44Vw2TLevF9XD4yIC0VaPwRX7en8Oagg.PNG/po9.png?type=w1200"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=2K2WCGstHOY.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              바벨 로우
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://post-phinf.pstatic.net/MjAxODAxMjNfMjIw/MDAxNTE2Njc2MjMzMjIy.BflD6-_uvFC25x4FztcFJDJjbp7c56ThroQ1ihsoUGMg.bU-fWpETDbIRlkMFi8YNvVUfzVvNlrVl3i0iQuN4qPIg.PNG/n4.png?type=w1200"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=-j7Xtlx2S2g.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              시티드 로우
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://post-phinf.pstatic.net/MjAxNzExMDdfMTUy/MDAxNTEwMDMyMjk2MDU1.3R0kgAVQ6zF6Di7MEX7bQ9_7AvM52G-mOx4uX9N1uVsg.qF7itc0x6gOi5wSghPjCMpvHg_TH-ZrpeGoJm_GYvaIg.PNG/19.png?type=w1200"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=pkKfWeQ9APQ.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              풀 업
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxOTAyMTlfMTY3/MDAxNTUwNTczNjQ5MDIz.gKJs1zhOEzz6D-2eCTNB-Yj479LBFqR1tNXfk8MuvMYg.xR2ZJfHVBMZQCcr1cyBvlWZtngwX_cgR5EwlrdJ8HEgg.JPEG.agym5/%ED%92%80%EC%97%85%EA%B7%BC%EC%9C%A1.jpg?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=9lsqux_WcBo.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              데드리프트
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://lh3.googleusercontent.com/NrfaMcOC-vOYvG8QaaRMN-nSxZuExvagNqFbqJFfs5DjKsc0PfiRHcBazNngfva6uGjyfRnhB1V81WLGBnxbIMFI_UjqMzTd7LArS-TuNP2s-IxBohTReEv7xgeaVA_9nJqTq4A8nA=w700-h410-no"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=EBjYQeeBI-0.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              원 암 덤벨 로우
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMzBfMyAg/MDAxNTE0NjAyOTczNjE3.ZYyAuGEpDgl5vhs2AcCBctiisSnf4_cGtVUqEV43uM8g.Aa3cO95P-b_Lx5OFL0H2NsJ3sw-Tf4y2UFplQqYx7bQg.JPEG.houk0907/One%2BArm%2BDumbbell%2BRow.jpg?type=w2"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=2i1v1UvsP_w.mp4"
                width="900px"
                height="595px"
                controls
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowcaseBack;
