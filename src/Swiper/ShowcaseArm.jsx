import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseArm = () => {
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
              바벨 컬
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDRfMTE4/MDAxNTU5NjU4OTkwMjky.GhHJllU0SbeXeKj0Ev2xVjduM1uV77UoLEHJfctXyfUg.VHajee0El_28-K-4iZ8BPl9naaBTm-ULfFc8mp43li4g.PNG.0307mini/%EC%9D%B4%EB%91%90%EC%9A%B4%EB%8F%99_%EC%8A%A4%ED%83%A0%EB%94%A9_%EB%B0%94%EB%B2%A8%EC%BB%AC_%ED%8C%94%EC%9A%B4%EB%8F%99_(1).png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=Dlg0W_5mq98.mp4"
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
              덤벨 컬
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMTVfMjAz/MDAxNTEzMzE2NzI3MjYy.4nubvztzwmd_sL8wh0DtBrwPSF70qrYxObuFDxtgKW0g.S10NfI7bJ_4W4NHDn2GzR7L2N2DqLpFerNZLZ9BS5AEg.PNG.chingyangn/n2.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=cOver4_h5Uw.mp4"
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
              프리쳐 컬
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/246B974E587D78CB02"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=X1FSQR3EOPY.mp4"
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
              케이블 푸시다운
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MjdfNDUg/MDAxNjI3MzcxMjU0MTYx.OPl8Dc9dZco2UuwOU-6fTyvUWFqM9UYfdrql6ITj0Log.YVjwzXjnc3Vn2O0552Mxd6Ei56d3J0dJGVm3tBTg3osg.JPEG.hdsporex/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_(2).jpg?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=ObEtLS9heOo.mp4"
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
              라잉 트라이셉스 익스텐션
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/243C953A587C3E2827"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=ogyGQxuxxn4.mp4"
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

export default ShowcaseArm;
