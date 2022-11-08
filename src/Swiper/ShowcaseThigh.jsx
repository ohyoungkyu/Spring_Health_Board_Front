import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Style.css";
import { Navigation } from "swiper";
const ShowcaseThigh = () => {
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
              맨몸 스쿼트
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMTAyMTVfMjQy/MDAxNjEzMzQyMTU3NzY1.AUGPcxPyfriXx6I25OnzTnhIsGjh9GxiPgKw0o83C1og.EC_tQlKKasb1SCvOpngfXOkbnQ06pb8fe0wJNa50hTYg.PNG.king_gym/%EB%A7%A8%EB%AA%B8%EC%8A%A4%EC%BF%BC%ED%8A%B8.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=MWjKQGoNW0U.mp4"
                width="1200px"
                height="auto"
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
              가블릿 스쿼트
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://i0.wp.com/allaboutexhealth.com/wp-content/uploads/2022/06/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%AA%E1%86%A8%E1%84%92%E1%85%A1%E1%86%AB-%E1%84%83%E1%85%A5%E1%86%B7%E1%84%87%E1%85%A6%E1%86%AF-%E1%84%80%E1%85%A9%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BA-%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3-%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A6.png?resize=800%2C545&ssl=1"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=8_67S2zKfvE.mp4"
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
              런지
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MThfMjIz/MDAxNTY4Nzg5MDY2NTU3.5shSbuiSmTAVcfDaByJwKaMKi907kJAUTGfi2ajv-G8g.6ZhVuiGr32rUrhQuR7lzHUK1tEW6N10E3lkewXGVk0Ag.PNG.lim123400/SE-69765c7c-224c-4198-8d15-ab715d5880f7.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=5kuLBT9H0Bs.mp4"
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
              레그 익스텐션
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://blog.kakaocdn.net/dn/bk9xe1/btq9gXgEjXp/1XWMZeXBD9QOOg9fVXDGM1/img.png"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=mS9iwXhycJI.mp4"
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

export default ShowcaseThigh;
