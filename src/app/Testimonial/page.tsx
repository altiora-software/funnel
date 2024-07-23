import React from "react";
import { Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const TestimonialsContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  marginBottom: theme.spacing(2),
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  margin: "auto",
  marginBottom: theme.spacing(1),
}));

const testimonials = [
  {
    name: "Juan Pérez",
    text: "Este producto cambió mi vida. ¡Totalmente recomendado!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "María García",
    text: "La mejor compra que he hecho. Calidad excepcional y muy fácil de usar.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Carlos Rodríguez",
    text: "Excelente servicio al cliente y el producto es de primera calidad.",
    avatar: "/images/avatar3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <Typography variant="h4" gutterBottom>
        Lo que nuestros clientes dicen
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TestimonialCard>
              <TestimonialAvatar src={testimonial.avatar} />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.text}
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </TestimonialsContainer>
  );
};

export default Testimonials;
