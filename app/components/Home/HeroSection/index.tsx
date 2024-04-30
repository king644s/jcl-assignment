import React from "react";

import HeroImage from "@/public/home/Hero Pic.png";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <Image
        src={HeroImage}
        alt="hero image"
        style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
      />
    </>
  );
};

export default HeroSection;
