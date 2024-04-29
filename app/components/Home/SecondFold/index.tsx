"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";
import { Archivo_Black } from "next/font/google";
import styles from "./SecondFold.module.scss";
import { Autoplay, Parallax } from "swiper/modules";

const Archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });

type Props = {};

const SecondFold = (props: Props) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides
        allowTouchMove={false}
        slidesPerView={"auto"}
        freeMode={true}
        speed={1000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Parallax]}
        loop
      >
        <SwiperSlide style={{ width: 620 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Creative*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 620 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Creative*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 620 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText} `}>
            Creative*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 620 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Creative*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 620 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Creative*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 620 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Creative*
          </h2>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={0}
        centeredSlides
        allowTouchMove={false}
        slidesPerView={"auto"}
        freeMode={true}
        speed={1000}
        dir="rtl"
        autoplay={{ delay: 0, disableOnInteraction: false }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Parallax]}
        loop
      >
        <SwiperSlide style={{ width: 750 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Disruptive*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Disruptive*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}  `}>
            Disruptive*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Disruptive*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText} `}>
            Disruptive*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText} `}>
            Disruptive*
          </h2>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={0}
        centeredSlides
        allowTouchMove={false}
        slidesPerView={"auto"}
        freeMode={true}
        speed={1000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Parallax]}
        loop
      >
        <SwiperSlide style={{ width: 750 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Innovation*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Innovation*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText} `}>
            Innovation*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2
            className={`${Archivo.className} ${styles.sliderText} ${styles.sliderTextActive}`}
          >
            Innovation*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Innovation*
          </h2>
        </SwiperSlide>
        <SwiperSlide style={{ width: 750 }}>
          <h2 className={`${Archivo.className} ${styles.sliderText}`}>
            Innovation*
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondFold;
