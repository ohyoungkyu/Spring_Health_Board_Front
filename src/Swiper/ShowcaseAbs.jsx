import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseAbs = () => {
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
              플랭크
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/2569B53758B5FFAC30"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=Zq8nRY9P_cM.mp4"
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
              크런치
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://post-phinf.pstatic.net/MjAxODA4MDdfMTkx/MDAxNTMzNjEyNTE2MDg5.dF9uosiI2-VoCkrxoDerEFIrb52W4PMKko-zJmlTh_cg.RA6DtX30lz7vq2fWtXsSbf6XhXlzffQcCwVeEsPwmfkg.PNG/3.png?type=w1200"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=ghclqJxl8AU.mp4"
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
              시티드 니업
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MDFfMTU2%2FMDAxNTA0MjczODE2MjMy.Zxew0Q1EtCRYhtTKMmHBw1PgIVw1TlyLg4ZC35z-cuUg.ftX_KmqMROQ26d0PanBebxta9uwrAfMQQGWe1xPcd34g.PNG.songqsam%2F13.png&type=sc960_832"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=jaQBChL-B6w.mp4"
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
              레그레이즈
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/9908D93B5EFF37EB26"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=oujD2ksPxp4.mp4"
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
              행잉 레그레이즈
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://blog.kakaocdn.net/dn/bwSfty/btqTtq0JZ7I/b5VeO60vrlrbi12cpY3W5K/img.jpg"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=tNFciUXMy1s.mp4"
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
              딥스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MThfNzYg/MDAxNTI5Mjk4NDk0NTM5.xjK8jGxogcdt-Tyq8_ZTHN2-W7YISN01WP2IgXYgfJYg.VnAenTp_EZzTZ0AjMGzVWKJ5mmDD-2oxXlBCnZPJu7Qg.JPEG.sqzenny/image_7768357841529298427460.jpg?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=pQSfXvaQGas.mp4"
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

export default ShowcaseAbs;
