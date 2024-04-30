"use client";

import React, { LegacyRef, useRef } from "react";
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
  const container = useRef(null);

  const FloatGsap = () => {
    const tlCan = gsap.timeline({ repeat: -1 });
    tlCan.to(".image-float", {
      translateX: "+=5",
      translateY: "+=7",
      rotation: "+=4",
      ease: "power1.inOut",
    });
    tlCan.to(".image-float", {
      y: "-=30",
      x: "+=20",
      rotation: "-=5",
      ease: "power1.inOut",
    });

    //move down right
    tlCan.to(".image-float", 2, {
      y: "+=30",
      x: "-=20",
      rotation: "-=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, {
      y: "-=20",
      rotation: "+=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, {
      y: "+=20",
      rotation: "+=5",
      ease: "power1.inOut",
    });

    tlCan.to(".image-float", 3, { y: "-=50", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "+=50", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "-=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 3, { y: "+=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 2, { y: "-=30", ease: "power1.inOut" });

    tlCan.to(".image-float", 2, { y: "+=30", ease: "power1.inOut" });
  };

  useGSAP(
    () => {
      // gsap code here...
      FloatGsap();
    },
    { scope: container }
  );

  return (
    <section className={styles.secondFoldCont} ref={container}>
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
        className={`${styles.element} image-float`}
      />
    </section>
  );
};

export default SecondFold;
