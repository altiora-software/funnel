import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const Confirmation: React.FC<{ handleReset: () => void }> = ({ handleReset }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Confirmación
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gracias por tu compra. Tu pedido ha sido confirmado.
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Volver a la tienda
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
