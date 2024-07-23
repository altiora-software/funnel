import React from "react";
import { Typography, Link, Grid, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const FooterContainer = styled("footer")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <Box mb={2}>
          <Image
            src="/Altiora.png"
            alt="Altiora Logo"
            width={150}
            height={50}
          />
        </Box>
        <Typography variant="h6" gutterBottom>
          Altiora
        </Typography>
        <Typography variant="body1" gutterBottom>
          Proporcionamos herramientas tecnológicas a emprendedores y empresas
          para que puedan alcanzar a sus clientes y crecer sus negocios.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <FooterLink href="/terms-and-conditions">
              Términos y Condiciones
            </FooterLink>
            <FooterLink href="/privacy-policy">
              Política de Privacidad
            </FooterLink>
            <FooterLink href="/contact">Contacto</FooterLink>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" mt={2}>
          &copy; {new Date().getFullYear()} Altiora. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
