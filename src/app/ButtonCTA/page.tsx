import React from "react";
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
  return (
    <SecondCTAContainer>
      <Typography variant="h4" gutterBottom>
        No esperes más, haz tu pedido hoy mismo
      </Typography>
      <SecondCTAButton variant="contained" color="primary" size="large">
        Comprar Ahora
      </SecondCTAButton>
    </SecondCTAContainer>
  );
};

export default ButtonCTA;
