import React from "react";
import styles from "./Footer.module.scss";
import { Container, Grid } from "@mui/material";
import footerLogo from "@/public/common/JCL-footer-Logo.svg";
import Image from "next/image";
import fbIcon from "@/public/common/fb-icon.svg";
import ytIcon from "@/public/common/yt-icon.svg";
import gramIcon from "@/public/common/gram-icon.svg";
import xIcon from "@/public/common/x-icon.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          rowSpacing={{ xs: 5, lg: 0 }}
        >
          <Grid item xs={12}>
            <Link href="/">
              <Image
                src={footerLogo}
                alt="jcl-logo"
                height={145}
                width={134}
                className={styles.logoImg}
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            justifyContent={{ xs: "flex-start", lg: "center" }}
            flex={1}
            order={{ xs: 2, lg: 1 }}
          >
            <h3>© {new Date().getFullYear()}, Jio Creative Labs</h3>
          </Grid>
          <Grid item xs={12} container order={{ xs: 1, lg: 2 }}>
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
