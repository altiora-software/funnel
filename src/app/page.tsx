"use client";

import { Button, createTheme, ThemeProvider } from "@mui/material";
import styles from "./page.module.css";
import TopBar from "./topbar/page";
import theme from './theme'
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#3f50b5",
//     },
//     secondary: {
//       main: "#ff005d",
//     },
//   },
// });

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <TopBar />
      </main>
    </ThemeProvider>
  );
}
