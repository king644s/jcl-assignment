import React from "react";
import styles from "./JoinSection.module.scss";
import GradientButton from "@/app/ui/GradientButton";
import { Montserrat, Source_Sans_3 } from "next/font/google";

type Props = {};
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const sourceSansPro = Source_Sans_3({ weight: "800", subsets: ["latin"] });

const JoinSection = (props: Props) => {
  return (
    <section className={styles.joinSection}>
      <h2 className={sourceSansPro.className}>JOIN THE BRANDWAGON</h2>
      <GradientButton>
        <h3 className={montserrat.className}>Let’s do Business</h3>
      </GradientButton>
    </section>
  );
};

export default JoinSection;
