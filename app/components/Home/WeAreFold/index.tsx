"use client";
import React, { CSSProperties, MouseEvent, useRef, useState } from "react";
import styles from "./WeAreFold.module.scss";
import { Container, Grid } from "@mui/material";
import DownArrow from "@/public/home/weAreFold/downArrow.svg";
import Image from "next/image";
import { Archivo_Black, Montserrat } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Parallax } from "swiper/modules";
import "swiper/css";
import GradientButton from "@/app/ui/GradientButton";
import CursorSVG from "@/public/home/weAreFold/cursor.svg";
import { keyframes, css } from "@emotion/react";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

type Props = {};

const weAreTiltles = [
  { title: "jio creative labs", color: "#03007F" },
  { title: "THINKERS", color: "#FF2E63" },
  { title: "STORYTELLERS", color: "#00C0CC" },
  { title: "STRATEGISTS", color: "#03007F" },
  { title: "WRITERS", color: "#FF2E63" },
  { title: "DESIGNERS", color: "#00C0CC" },
  { title: "DIRECTORS", color: "#03007F" },
  { title: "PRODUCERS", color: "#FF2E63" },
  { title: "POST-PRODUCERS", color: "#00C0CC" },
  { title: "COMPOSERS", color: "#03007F" },
  { title: "EDITORS", color: "#FF2E63" },
  { title: "PLANNERS", color: "#00C0CC" },
  { title: "MARKETERS", color: "#03007F" },
  { title: "COLOURISTS", color: "#FF2E63" },
  { title: "SPECIALISTS", color: "#00C0CC" },
  { title: "INFLUENCERS", color: "#03007F" },
  { title: "MANAGERS", color: "#FF2E63" },
  { title: "TECHIES", color: "#00C0CC" },
  { title: "+ interns", color: "#03007F" },
];

const WeAreFold = (props: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setCursorHovered(true);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
  };

  const cursorStyle: CSSProperties = {
    position: "fixed",
    top: cursorPosition.y - 30,
    left: cursorPosition.x - 30,
    pointerEvents: "none",
    zIndex: 9999,
    transition: "transform 0.1s ease",
    transform: `scale(1.5) rotate(0deg)`,
  };

  return (
    <section className={styles.weAreFoldMain}>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cursorHovered && (
          <Image
            src={CursorSVG}
            alt="Custom Cursor"
            style={cursorStyle}
            className={styles.cursorAnimation}
            height={70}
            width={70}
          />
        )}
        <Container fixed>
          <Grid container alignItems="flex-end" justifyContent="flex-start">
            <Grid item>
              <h2 className={archivo.className}>WE ARE</h2>
            </Grid>
            <Grid item>
              <Image
                src={DownArrow}
                alt="down-arrow"
                height={155}
                width={155}
              />
            </Grid>
            <Grid item xs={12}>
              <Swiper
                spaceBetween={0}
                centeredSlides
                allowTouchMove={false}
                slidesPerView={1}
                direction="vertical"
                freeMode={true}
                speed={500}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                // onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.titleSwiper}
                modules={[Autoplay]}
              >
                {weAreTiltles.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <h2
                        className={`${archivo.className}`}
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h2>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid>
            <Grid item xs={7}>
              <p className={`${montserrat.className} ${styles.bodyText}`}>
                Step into the realm of JCL aka Jio Creative Labs, where
                imagination runs wild and creativity takes the center stage.
                We're not your average agency; we're the misfits who bring the
                funk to your brand.
              </p>
              <GradientButton
                boxStyles={{ marginTop: "20px" }}
                boxClassName={styles.butonBox}
                style={{ padding: "5px 20px" }}
              >
                <h3 className={`${montserrat.className} ${styles.buttonText}`}>
                  Read More
                </h3>
                <Image
                  src={DownArrow}
                  alt="down-arrow"
                  height={20}
                  width={20}
                  className={styles.buttonImage}
                />
              </GradientButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default WeAreFold;
