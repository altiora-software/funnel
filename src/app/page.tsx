"use client";

import { Button, Container, createTheme, ThemeProvider } from "@mui/material";
import styles from "./page.module.css";
import TopBar from "./topbar/page";
import theme from "./theme";
import HeroGrid from "./HeroGrid/page";
import ProductVideo from "./ProductVideo/page";
import Testimonials from "./Testimonial/page";
import ButtonCTA from "./ButtonCTA/page";
import Footer from "./Footer/page";
import LocationInfo from "./LocationInfo/LocationInfo";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <TopBar />
        <Container maxWidth="xl">
          <HeroGrid />
          <ProductVideo />
          <LocationInfo />
          <Testimonials />
          <ButtonCTA />
          <Footer />
        </Container>
      </main>
    </ThemeProvider>
  );
}
