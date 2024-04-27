"use client";
import { Inter, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: inter.style.fontFamily,
          fontWeight: 500,
          color: "#344054",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#1D1D1F",
          borderBottomWidth: "2px",
        },
      },
    },
  },
});

export default theme;
