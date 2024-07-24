"use client"
import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Container } from '@mui/material';
import Cart from '../../components/Cart';
import Shipping from '../../components/Shipping';
import Payment from '../../components/Payment';
import Confirmation from '../../components/Confirmation';

const steps = ['Carrito', 'Envío', 'Compra', 'Confirmación'];

const Checkout: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Cart handleNext={handleNext} />;
      case 1:
        return <Shipping handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Payment handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Confirmation handleReset={handleReset} />;
      default:
        return 'Paso desconocido';
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt={4}>{getStepContent(activeStep)}</Box>
      </Box>
    </Container>
  );
};

export default Checkout;
