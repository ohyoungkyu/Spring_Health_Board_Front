import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseCalf = () => {
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
            <div className="SwiperTop font-bold">스탠딩 카프 레이즈</div>
            <img src="http://m.healthtvshop.co.kr/web/product/medium/201811/61efcfa48b04270bebbdb1fe1708a491.jpg"></img>
          </div>
          <ReactPlayer
            className="Exercisevideo"
            url="https://www.youtube.com/watch?v=QdAtQJMKi0U.mp4"
            width="900px"
            height="595px"
            controls
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="SwiperTop font-bold">시티드 카프 레이즈</div>
            <img src="https://fitnessdergisi.com/wp-content/uploads/2022/10/calf-kasi-gelistirmek-icin-en-iyi-kalf-hareketleri-1.jpg"></img>
          </div>
          <ReactPlayer
            className="Exercisevideo"
            url="https://www.youtube.com/watch?v=dKndG6HQDr0.mp4"
            width="900px"
            height="595px"
            controls
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowcaseCalf;
