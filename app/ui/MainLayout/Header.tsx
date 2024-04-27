import { Container, Grid } from "@mui/material";
import React from "react";
import JCL from "@/public/common/jcl.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.headerBox}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={styles.headerMain}
        >
          <Grid item xs={4}>
            <Image src={JCL} alt="JCL Logo" width={285} height={46} />
          </Grid>
          <Grid
            item
            container
            xs={8}
            alignItems="center"
            justifyContent="flex-end"
            columnSpacing={5}
          >
            <Grid item>
              <Link href="">Services</Link>
            </Grid>
            <Grid item>
              <Link href="">Our Work</Link>
            </Grid>
            <Grid item>
              <Link href="">Careers</Link>
            </Grid>
            <Grid item>
              <Link href="">Contact Us</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;