import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const Showcase = () => {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swipefont">123</div>
          <img src="https://post-phinf.pstatic.net/MjAxODA2MjZfMTE4/MDAxNTI5OTk5MzQ0MzI1.1n5bqBArTVeUSRh_N8TH4pBObm1ZNNtuhv8u0L-Q6gkg.kUWEVu0SR6cLnI2jpZNvg6e-_g0HjXMxD0hkGXDtzNwg.JPEG/4.jpg?type=w1200"></img>
          <video
            className="Exercisevideo"
            src="https://blog.kakaocdn.net/dn/LTyNQ/
btqGtnA9vZi/
UAk9kxQpS8xz8TkPk2BdW0/tfile.mp4"
            controls
            autoPlay
            loop
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://post-phinf.pstatic.net/MjAxNzAyMTVfNTUg/MDAxNDg3MTQyNjMwMTYx.WGiKB-XAqHJ2uCd6fJK4u9ZeoiQZ32nEKlclHmPmtlcg.ogPBkpL0fGJOAth6K8fHtOmyOmkiLzKFwzE88Yitf5Ug.JPEG/po2_%EC%82%AC%EB%B3%B8.jpg?type=w1200"></img>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Showcase;
