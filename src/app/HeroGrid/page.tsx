// src/app/HeroGrid/page.tsx
"use client"; // Indica que este componente se renderiza en el cliente

import React from "react";
import { useRouter } from "next/navigation"; // Importa desde 'next/navigation'
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
});

const HeroGrid: React.FC = () => {
  const router = useRouter(); // Usa 'useRouter' desde 'next/navigation'

  const handleClick = () => {
    router.push("/FormMercadoPago"); // Redirige a la página de checkout
  };

  return (
    <HeroContainer>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            Descubre la mejor solución para tu problema X
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: "16px 28px",
              fontSize: "1.25rem",
              marginTop: "16px",
            }}
            onClick={handleClick}
          >
            Comprar Ahora
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductImage src="/portachu.jpeg" alt="Producto" />
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default HeroGrid;
