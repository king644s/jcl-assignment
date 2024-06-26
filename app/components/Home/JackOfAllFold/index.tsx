"use client";
import React, { useRef } from "react";
import styles from "./JackOfAll.module.scss";
import { Container, Grid } from "@mui/material";
import { Archivo_Black, Montserrat, Source_Sans_3 } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import Element from "@/public/home/jackofAll/element.png";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";

type Props = {};

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "700", subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

const JackOfAll = (props: Props) => {
  const container = useRef(null);

  // const ScrolFunction = () => {
  //   // container.current = ScrollSmoother.create({
  //   //   smooth: 2,
  //   //   effects: true,
  //   // });
  //   ScrollTrigger.create({
  //     trigger: ".tagContainer",
  //     pin: "true",
  //     start: "center center",
  //     end: "+1000",
  //     markers: true,
  //   });
  // };

  // useGSAP(
  //   () => {
  //     ScrolFunction();
  //   },
  //   { scope: container }
  // );

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
    <section className={styles.JackOfAll} ref={container}>
      <Container fixed>
        <h2 className={archivo.className}>
          We are the jack-of-all-trades & <br />
          master of fun!
        </h2>
        <h3 className={montserrat.className}>
          From mind-blowing campaigns to digital wizardry that will leave your
          competitors scratching their heads. We’ve got you covered, literally!
        </h3>
        <Grid container marginTop={10}>
          <Grid item xs={12} lg={6}>
            <Image
              src={Element}
              alt="jacl of all element"
              style={{ width: "100%", height: "auto" }}
              className="image-float"
            />
          </Grid>
          <Grid
            item
            container
            className={`tagContainer ${styles.scrollContainer}`}
            xs={12} lg={6}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid
              xs={12}
              item
              container
              alignItems="flex-start"
              justifyContent="center"
              direction="column"
              height="100%"
              className={styles.swipeCards}
            >
              <h4 className={archivo.className}>Mainline Advertising</h4>
              <h5 className={sourceSansPro.className}>
                TV, Print, Radio, Brand Strategy
              </h5>
            </Grid>
            <Grid
              xs={12}
              item
              container
              alignItems="flex-start"
              justifyContent="center"
              direction="column"
              height="100%"
              className={styles.swipeCards}
            >
              <h4 className={archivo.className}>Mainline Advertising</h4>
              <h5 className={sourceSansPro.className}>
                TV, Print, Radio, Brand Strategy
              </h5>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JackOfAll;
