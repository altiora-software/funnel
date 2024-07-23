import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TopBarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Message = styled(Typography)({
  color: "#ffffff",
  textAlign: "center",
  width: "100%",
});

const TopBar: React.FC = () => {
  return (
    <TopBarContainer position="static">
      <Toolbar>
        <Message variant="body1">
          ¡10% de descuento en tu primera compra! Usa el código: BIENVENIDO10
        </Message>
      </Toolbar>
    </TopBarContainer>
  );
};

export default TopBar;
