import React, { useState } from 'react';
import { Typography, Box, Button, List, ListItem, ListItemText, IconButton, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart: React.FC<{ handleNext: () => void }> = ({ handleNext }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 50.00, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const getTotalAmount = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Carrito
      </Typography>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={product.description}
            />
            <Typography variant="body2">${product.price.toFixed(2)}</Typography>
            <Box ml={2}>
              <IconButton onClick={() => handleQuantityChange(product.id, -1)} disabled={product.quantity <= 1}>
                <RemoveIcon />
              </IconButton>
              <Input
                type="text"
                value={product.quantity}
                readOnly
                style={{ width: '40px', textAlign: 'center' }}
              />
              <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box mt={2}>
        <Typography variant="h6">Total: ${getTotalAmount()}</Typography>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
