import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    green: "#14f1af",
    grey: "#5c6077",
    blue: "#3f48d8",
    lightGrey: "#303550",
    lighterBlue: "#303550",
    lightBlue: "#1E2131",
    darkBlue: "#151829",
    darkerBlue: "#101320;",
    errorLight: "#ffe0e0",
    errorDark: "#f91e1f",
  },
  fontSizes: {
    extraSmall: "11px",
    small: "12px",
    medium: "14px",
    large: "28px",
  },
};

type ThemeProps = {
  children?: ReactNode;
};
const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
