import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseShoulder = () => {
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
              밀리터리 프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/99376B3A5AD2C1C42C"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=JyAhfMb3FIw.mp4"
                width="900px"
                height="595px"
                playing
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
              프론트 케이블 레이즈
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTZfMTQ4/MDAxNjEzNDMyNTI5MzM5.-EBCcax9H-iUHsJpWBs4S_4Y_1v1n8mvR5EJZ03cFiMg.RtmKJnx6rdtJ0ovJjo9f8zOwCRA_qNLQWyAva1io4z8g.PNG.gentle__gym/image.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=brwXNeJ-73E.mp4"
                width="900px"
                height="595px"
                playing
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
              페이스 풀
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTRfMzYg/MDAxNjAwMDU5NjkzMzQ1.SbfcLRnkoqr2QKV4HL4HtcRtQAXE1SPyN3j3XzMJ45Yg.Zf6wbLoLrJfBsq6BSu7VKMl2ZJjS-I1fLusLdk_q4rQg.PNG.ntgirl2/asdnjkwqd.PNG?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=7IngtcwTde4.mp4"
                width="900px"
                height="595px"
                playing
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
              덤벨 숄더 프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/226B864F589FAA5037"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=Ia9DYFMkMmU.mp4"
                width="900px"
                height="595px"
                playing
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
              사이드 레터럴 레이즈
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMjA2MDdfMTE1/MDAxNjU0NTU0OTUyMzU2.QfK-3KphZ-HxrKSn5mz-76U20te87BycrfpSlG4wiKMg.p8M0EPidbqagDJegKPvgKiVyyJYRFIyEXfDZxGnFR5Mg.PNG.scshin970/1.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=iNgwwI3WBTo.mp4"
                width="900px"
                height="595px"
                playing
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
              업라이트 바벨 로우
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/227A833858A1234A23"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=sRWFEY1M_Jo.mp4"
                width="900px"
                height="595px"
                playing
                controls
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowcaseShoulder;
