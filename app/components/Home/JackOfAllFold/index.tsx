import React from "react";
import styles from "./JackOfAll.module.scss";
import { Container, Grid } from "@mui/material";
import { Archivo_Black, Montserrat, Source_Sans_3 } from "next/font/google";

type Props = {};

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ weight: "700", subsets: ["latin"] });

const JackOfAll = (props: Props) => {
  return (
    <section className={styles.JackOfAll}>
      <Container fixed>
        <h2 className={archivo.className}>
          We are the jack-of-all-trades & <br />
          master of fun!
        </h2>
        <h3 className={montserrat.className}>
          From mind-blowing campaigns to digital wizardry that will leave your
          competitors scratching their heads. We’ve got you covered, literally!
        </h3>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <article className={styles.swipeCards}>
              <h4 className={archivo.className}>Mainline Advertising</h4>
              <h5 className={sourceSansPro.className}>
                TV, Print, Radio, Brand Strategy
              </h5>
            </article>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JackOfAll;
