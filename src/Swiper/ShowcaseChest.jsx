import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

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
          <div>
            <div
              className="SwiperTop font-bold"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              케이블 크로스 오버
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/264D7E3F587447D701"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=pIvkNgiuzec.mp4"
                width="1200px"
                height="auto"
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
              인클라인 밴치프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTVfMzUg%2FMDAxNjIzNzQ2MTcwMTUw.4DY-AjnXwLJypOVn6ZrHJpyQKSEF8uETq2A_bdIMW7cg.puebq95sw_9nl8Pd20sFeGkRStSvwN2Z4peOz4a5gTgg.JPEG.sd670%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4.-001_%25284%2529.jpg"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=4HvI_mFhzVQ.mp4"
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
              인클라인 덤벨 프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTVfMjMx%2FMDAxNjQ3MzA4MTk2OTIx.9nW3ITIjd4NbPkFNZiJTZE1aQchf9PvvMCfbN66oGGAg.4KZIBhtUtkUwsRIrJck0kaiKhewL211qoP11AYABqfsg.JPEG.inhealthergym%2F%25C1%25A6%25B8%25F1%25C0%25BB-%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%252811%2529.jpg"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=hNXey1DpHlI.mp4"
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
              펙 덱 플라이
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjhfMTE0%2FMDAxNTgwMTk1Mjc3MjY0.acjYUcAbmQBIxR6lz21iHphXjgYZnjzp9-flCv6z5Mog.rcBB9M9ARPALhDwIk3MtAK8Kj67oEPXSq_hBjxoWjK0g.PNG.subin0145%2FPec%252BDeck.png"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=oJRW-Y1QvJQ.mp4"
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
              푸시업
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA4MTdfMjM5%2FMDAxNTAyOTMxOTc5Njky.HV24k9DwQoAzVx5wDcDjV0LTLya4Zf6OvdH3dm5yuREg.MV_Ruhz0uS5hXx44HpPyRysoX4LrobU2aZ8rr-IeYGkg.JPEG.dodtjs77%2Fdfkfddfs2234312.jpg"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=aoH7qNedO8k.mp4"
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
              체스트 프레스
            </div>
            <div className="flex" style={{ height: "600px" }}>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjRfMTI2/MDAxNTgyNTEwODM5NzE3.csmE9rAuHormTQBAVReaGX__YK-fwx0j0rlZZs2Iizog.b7JBEgPLHzqeFkRWALUObjCrgyNOjnr6PO4tlF8wkxsg.PNG.yunwangs/3.png?type=w800"
                style={{ height: "auto", width: "600px" }}
              ></img>

              <ReactPlayer
                className="Exercisevideo"
                url="https://www.youtube.com/watch?v=YOF_v_nT1Kg.mp4"
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

export default Showcase;
