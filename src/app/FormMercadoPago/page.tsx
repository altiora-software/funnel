"use client"

import React from "react";
import { styled } from "@mui/material/styles";
import MercadoPagoForm from "@/components/MercadoPagoForm";

const FormMercadoPago = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));


const MercadoPagoPage: React.FC = () => {
  return (
    <FormMercadoPago>
      <MercadoPagoForm/>
    </FormMercadoPago>
  );
};

export default MercadoPagoPage;
