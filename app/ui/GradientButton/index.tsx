import { Button, ButtonProps } from "@mui/material";
import React, { FC, ReactNode } from "react";
import styles from "./GradientButton.module.scss";

type Props = {
  children: ReactNode;
} & ButtonProps;

const GradientButton: FC<Props> = ({ children, ...otherProps }) => {
  return (
    <div className={styles.buttonBox}>
      <Button className={styles.button} {...otherProps}>
        {children}
      </Button>
    </div>
  );
};

export default GradientButton