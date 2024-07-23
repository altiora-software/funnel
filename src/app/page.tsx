"use client";

import { Button, createTheme, ThemeProvider } from "@mui/material";
import styles from "./page.module.css";
import TopBar from "./topbar/page";
import theme from "./theme";
import HeroGrid from "./HeroGrid/page";
import ProductVideo from "./ProductVideo/page";
import Testimonials from "./Testimonial/page";
import ButtonCTA from "./ButtonCTA/page";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <TopBar />
        <HeroGrid />
        <ProductVideo />
        <Testimonials />
        <ButtonCTA />
      </main>
    </ThemeProvider>
  );
}
