import React from "react";
import { Typography, Box, Container, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const LocationInfoContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.paper,
  textAlign: "center",
}));

const InfoItem = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[2],
}));

const LocationInfo: React.FC = () => {
  return (
    <LocationInfoContainer>
      <Container>
        <Typography variant="h2" gutterBottom>
          Nuestra Ubicación y Servicios
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            
              <Typography variant="h4" gutterBottom>
                Ubicación
              </Typography>
              <Typography variant="h5">
                Nos encontramos en San Salvador de Jujuy, Jujuy, Argentina.
              </Typography>
            
          </Grid>
          <Grid item xs={12} md={6}>
            
              <Typography variant="h4" gutterBottom>
                Envíos
              </Typography>
              <Typography variant="h5">
                Realizamos envíos a todo el país.
              </Typography>
            
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <InfoItem>
              <Typography variant="h6" gutterBottom>
                Horarios de Atención
              </Typography>
              <Typography variant="body1">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body1">
                Sábados: 9:00 AM - 2:00 PM
              </Typography>
            </InfoItem>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <InfoItem>
              <Typography variant="h6" gutterBottom>
                Contacto
              </Typography>
              <Typography variant="body1">
                Correo: contacto@tuempresa.com
              </Typography>
              <Typography variant="body1">
                Teléfono: +54 123 456 7890
              </Typography>
              <Box mt={2}>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </InfoItem>
          </Grid>
        </Grid>
      </Container>
    </LocationInfoContainer>
  );
};

export default LocationInfo;
