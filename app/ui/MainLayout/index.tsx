import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./MainLayout.module.scss";

type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
