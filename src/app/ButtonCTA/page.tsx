'use client'; // Indica que este componente se renderiza en el cliente

import React from "react";
import { useRouter } from 'next/navigation'; // Importa desde 'next/navigation'
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SecondCTAContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 4),
  textAlign: "center",
  backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#ffffff",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Añade un overlay oscuro
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));
const SecondCTAButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ButtonCTA: React.FC = () => {
  const router = useRouter(); // Usa 'useRouter' desde 'next/navigation'
  
  const handleClick = () => {
    router.push('/Checkout'); // Redirige a la página de checkout
  };
  return (
    <SecondCTAContainer>
      <Typography variant="h4" gutterBottom>
        No esperes más, haz tu pedido hoy mismo
      </Typography>
      <SecondCTAButton
        onClick={handleClick}
        variant="contained"
        color="primary"
        size="large"
        sx={{
          padding: "16px 28px",
          fontSize: "1.25rem",
          marginTop: "16px",
        }}
      >
        Comprar Ahora
      </SecondCTAButton>
    </SecondCTAContainer>
  );
};

export default ButtonCTA;
