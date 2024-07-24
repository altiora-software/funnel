'use client'; // Indica que este componente se renderiza en el cliente

import React from "react";
import { useRouter } from 'next/navigation'; // Importa desde 'next/navigation'
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const SecondCTAContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.default,
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
      <SecondCTAButton onClick={handleClick} variant="contained" color="primary" size="large">
        Comprar Ahora
      </SecondCTAButton>
    </SecondCTAContainer>
  );
};

export default ButtonCTA;
