import React from "react";
import styles from "./Clientals.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import client1 from "@/public/home/clients/client1.png";
import client2 from "@/public/home/clients/client2.png";
import client3 from "@/public/home/clients/client3.png";
import client4 from "@/public/home/clients/client4.png";
import client5 from "@/public/home/clients/client5.png";
import client6 from "@/public/home/clients/client6.png";
import { Autoplay } from "swiper/modules";
import { Container } from "@mui/material";
import { Archivo_Black } from "next/font/google";

type Props = {};
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });

const Clientals = (props: Props) => {
  return (
    <section className={styles.clientele}>
      <Container>
        <h2 className={archivo.className}>Recommended by the BEST</h2>
      </Container>
      <Swiper
        loop
        // slidesPerView={{}}
        allowTouchMove={false}
        freeMode={true}
        speed={1000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          520: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client1}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client2}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client3}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client4}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client5}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client6}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client1}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client2}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client3}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client4}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client5}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clientImageBox}>
            <Image
              src={client6}
              alt="client1"
              width={150}
              height={150}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Clientals;
