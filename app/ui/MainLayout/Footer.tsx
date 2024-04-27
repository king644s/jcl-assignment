import React from "react";
import styles from "./Footer.module.scss";
import { Container, Grid } from "@mui/material";
import footerLogo from "@/public/common/JCL-footer-Logo.svg";
import Image from "next/image";
import fbIcon from "@/public/common/fb-icon.svg";
import ytIcon from "@/public/common/yt-icon.svg";
import gramIcon from "@/public/common/gram-icon.svg";
import xIcon from "@/public/common/x-icon.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Container fixed>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={3}>
            <a href="">
              <Image
                src={footerLogo}
                alt="jcl-logo"
                height={145}
                width={134}
                className={styles.logoImg}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={5}
            container
            alignItems="center"
            justifyContent="center"
            flex={1}
          >
            <h3>© {new Date().getFullYear()}, Jio Creative Labs</h3>
          </Grid>
          <Grid item xs={3} container>
            <Grid item xs={3}>
              <a href="">
                <Image src={fbIcon} alt="fb-icon" height={35} width={35} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="">
                <Image src={ytIcon} alt="fb-icon" height={35} width={35} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="">
                <Image src={gramIcon} alt="fb-icon" height={35} width={35} />
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="">
                <Image src={xIcon} alt="fb-icon" height={35} width={35} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
