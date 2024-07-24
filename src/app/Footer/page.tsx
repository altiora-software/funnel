import React from "react";
import { Typography, Link, Grid, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const FooterContainer = styled("footer")(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
  textAlign: "center", // Asegura que todo el texto esté centrado
}));

const FooterLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <Image
                src="/Altiora.png"
                alt="Altiora Logo"
                width={150}
                height={150}
                objectFit="contain"
              />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5">
                Proporcionamos herramientas tecnológicas a emprendedores y
                empresas para que puedan alcanzar a sus clientes y crecer sus
                negocios.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ marginTop: 16 }}>
          <FooterLink href="/terms-and-conditions" sx={{ color: "black" }}>
            Términos y Condiciones
          </FooterLink>
          <FooterLink href="/privacy-policy" sx={{ color: "black" }}>
            Política de Privacidad
          </FooterLink>
          <FooterLink href="/contact" sx={{ color: "black" }}>
            Contacto
          </FooterLink>
        </Grid>
        <CopyrightText variant="body2">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://altiora-software.vercel.app">Altiora</a>. Todos los
          derechos reservados.
        </CopyrightText>
      
    </FooterContainer>
  );
};

export default Footer;
