"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography } from "@mui/material";
import { Archivo_Black } from "next/font/google";
import styles from "./SecondFold.module.scss";
import { Autoplay, Parallax } from "swiper/modules";
import element from "@/public/home/secondFold/element.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });

type Props = {};

gsap.registerPlugin(useGSAP);

const SecondFold = (props: Props) => {
  // const container = useRef();

  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", { x: 360 }); // <-- automatically reverted
  }, {});

  return (
    <section className={styles.secondFoldCont}>
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
      <Image
        src={element}
        alt="second fold image"
        width={750}
        height={645}
        className={styles.element}
      />
    </section>
  );
};

export default SecondFold;
