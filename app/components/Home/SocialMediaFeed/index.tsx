import React from "react";
import styles from "./socialMediaFeed.module.scss";
import { InstagramEmbed } from "react-social-media-embed";
import { Button, Container, Grid } from "@mui/material";
import { Archivo_Black, Montserrat } from "next/font/google";
import Link from "next/link";
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "800", subsets: ["latin"] });

type Props = {};

const SocialMediaFeed = (props: Props) => {
  return (
    <section className={styles.socialMediaFeed}>
      <Container>
        <div className={styles.titleBox}>
          <h2 className={archivo.className}>What’s Going on!</h2>
          <h3 className={montserrat.className}>
            check out our latest Social posts
          </h3>
        </div>
        <Grid container alignItems="flex-start" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            container
            alignItems="center"
            justifyContent="center"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C5AnFxrRZTA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={328}
              captioned
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            container
            alignItems="center"
            justifyContent="center"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C5DY-5NxOrL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={328}
              captioned
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            container
            alignItems="center"
            justifyContent="center"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/C4-S0ejRlXw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              width={328}
              captioned
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Link
              href="https://www.instagram.com/jio_creative_labs/"
              className={styles.viewMore}
            >
              VIEW MORE
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SocialMediaFeed;
