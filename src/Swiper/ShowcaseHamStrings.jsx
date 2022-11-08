import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseHamStrings = () => {
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
            <div className="SwiperTop font-bold">스티브 레그 데드리프트</div>
            <img src="https://post-phinf.pstatic.net/MjAxODAxMTJfMjY1/MDAxNTE1NzQxNTgxODQ1.QH5oEAkHscNu2CxiD33GtokeSZXJz-NBh1ZGYaHQkT4g.T8yAvZ0eC1XNzoPY8n6x6EzEHcPp1cJu08PwLx04ojcg.PNG/g4.png?type=w1200"></img>
          </div>
          <ReactPlayer
            className="Exercisevideo"
            url="https://www.youtube.com/watch?v=UgR8Eo40ReE.mp4"
            width="900px"
            height="595px"
            controls
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="SwiperTop font-bold">라잉 레그컬</div>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA5MjZfMjEg/MDAxNjY0MTcxMjQ2OTY3.lmTlmtU-y_-Bv2YFwKe5NkDQpUzgJH02Ik9qcsM2Z_4g.wStoFg0KwXpPYvKFYRdU65KQjfNP6oz8aMP5d9-WPrgg.JPEG.sangryeol80/1664171242512.jpg?type=w800"></img>
          </div>
          <ReactPlayer
            className="Exercisevideo"
            url="https://www.youtube.com/watch?v=9w8d_EL-7e4.mp4"
            width="900px"
            height="595px"
            controls
          />
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
              레그 프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://blog.kakaocdn.net/dn/bGZ6Kx/btrzBsBlewF/cjX76xbKAqMloye0kIXsY0/img.png"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=EV0F_3S7Sks&t=534s.mp4"
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

export default ShowcaseHamStrings;
