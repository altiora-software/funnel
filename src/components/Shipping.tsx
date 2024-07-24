import React from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';

const Shipping: React.FC<{ handleNext: () => void; handleBack: () => void }> = ({ handleNext, handleBack }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Envío
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField fullWidth label="Nombre" margin="normal" />
        <TextField fullWidth label="Dirección" margin="normal" />
        <TextField fullWidth label="Ciudad" margin="normal" />
        <TextField fullWidth label="Código Postal" margin="normal" />
        <TextField fullWidth label="País" margin="normal" />
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button onClick={handleBack}>Volver</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default Shipping;
