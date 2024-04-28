import { Button, ButtonProps } from "@mui/material";
import React, { CSSProperties, FC, HtmlHTMLAttributes, ReactNode } from "react";
import styles from "./GradientButton.module.scss";

type Props = {
  children: ReactNode;
  boxStyles?: CSSProperties;
  boxClassName?: string;
} & ButtonProps;

const GradientButton: FC<Props> = ({
  children,
  boxStyles,
  boxClassName,
  ...otherProps
}) => {
  return (
    <div
      className={`${styles.buttonBox} ${boxClassName ? boxClassName : ""}`}
      style={boxStyles}
    >
      <Button className={styles.button} {...otherProps}>
        {children}
      </Button>
    </div>
  );
};

export default GradientButton;
