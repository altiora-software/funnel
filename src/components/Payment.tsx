import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import CreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'; // Importa los estilos para react-credit-cards

type Focused = 'number' | 'name' | 'expiry' | 'cvc';

const Payment: React.FC<{ handleNext: () => void; handleBack: () => void }> = ({ handleNext, handleBack }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focused, setFocused] = useState<Focused | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'number') setNumber(value);
    if (name === 'name') setName(value);
    if (name === 'expiry') setExpiry(value);
    if (name === 'cvc') setCvc(value);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Compra
      </Typography>
      <Box display="flex" justifyContent="center" mb={2}>
        <CreditCard
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Número de tarjeta"
          margin="normal"
          name="number"
          value={number}
          onChange={handleChange}
          onFocus={() => setFocused('number')}
        />
        <TextField
          fullWidth
          label="Nombre en la tarjeta"
          margin="normal"
          name="name"
          value={name}
          onChange={handleChange}
          onFocus={() => setFocused('name')}
        />
        <TextField
          fullWidth
          label="Fecha de vencimiento (MM/AA)"
          margin="normal"
          name="expiry"
          value={expiry}
          onChange={handleChange}
          onFocus={() => setFocused('expiry')}
        />
        <TextField
          fullWidth
          label="CVC"
          margin="normal"
          name="cvc"
          value={cvc}
          onChange={handleChange}
          onFocus={() => setFocused('cvc')}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button onClick={handleBack}>Volver</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Confirmar Compra
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
