import React from "react";
import { Typography, Link, Grid, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const FooterContainer = styled("footer")(({ theme }) => ({
  padding: theme.spacing(4),
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

const CopyrightText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Box mb={2}>
              <Image
                src="/Altiora.png"
                alt="Altiora Logo"
                width={150}
                height={50}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Typography variant="body1" gutterBottom>
              Proporcionamos herramientas tecnológicas a emprendedores y empresas para que puedan alcanzar a sus clientes y crecer sus negocios.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: 16 }}>
          <FooterLink href="/terms-and-conditions">Términos y Condiciones</FooterLink>
          <FooterLink href="/privacy-policy">Política de Privacidad</FooterLink>
          <FooterLink href="/contact">Contacto</FooterLink>
        </Grid>
        <CopyrightText variant="body2">
          &copy; {new Date().getFullYear()} <a href="https://altiora-software.vercel.app">Altiora</a>. Todos los derechos reservados.
        </CopyrightText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
