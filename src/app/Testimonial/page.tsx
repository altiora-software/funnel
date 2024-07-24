// import React from "react";
// import Slider from "react-slick";
// import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const TestimonialsContainer = styled("div")(({ theme }) => ({
//   padding: theme.spacing(8, 4),
//   textAlign: "center",
//   backgroundColor: theme.palette.secondary.light,
// }));

// const TestimonialCard = styled(Card)(({ theme }) => ({
//   maxWidth: 345,
//   margin: "auto",
// }));

// const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
//   margin: "auto",
//   marginBottom: theme.spacing(1),
// }));

// const testimonials = [
//   {
//     name: "Juan Pérez",
//     text: "Este producto cambió mi vida. ¡Totalmente recomendado!",
//     avatar: "/testimonials/profile1.jpg",
//   },
//   {
//     name: "María García",
//     text: "La mejor compra que he hecho. Calidad excepcional y muy fácil de usar.",
//     avatar: "/testimonials/profile2.jpg",
//   },
//   {
//     name: "Carlos Rodríguez",
//     text: "Excelente servicio al cliente y el producto es de primera calidad.",
//     avatar: "/testimonials/profile3.jpg",
//   },
//   {
//     name: "Ana López",
//     text: "Muy satisfecho con los resultados. Recomendado al 100%.",
//     avatar: "/testimonials/profile4.jpg",
//   },
//   {
//     name: "Pedro Martínez",
//     text: "Un producto de alta calidad y un servicio excepcional.",
//     avatar: "/testimonials/profile5.jpg",
//   },
// ];

// const Testimonials: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       {
//         breakpoint: 768, // Modo móvil
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024, // Modo tablet
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <TestimonialsContainer>
//       <Typography variant="h4" gutterBottom>
//         Lo que nuestros clientes dicen
//       </Typography>
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <Box key={index} padding={2}>
//             <TestimonialCard>
//               <TestimonialAvatar src={testimonial.avatar} />
//               <CardContent>
//                 <Typography variant="h6">{testimonial.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {testimonial.text}
//                 </Typography>
//               </CardContent>
//             </TestimonialCard>
//           </Box>
//         ))}
//       </Slider>
//     </TestimonialsContainer>
//   );
// };

// export default Testimonials;


import React from "react";
import Slider from "react-slick";
import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const TestimonialsContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 4),
  textAlign: "center",
  backgroundColor: theme.palette.background.default, // Fondo neutro
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
  borderRadius: theme.shape.borderRadius * 2, // Bordes suaves
  boxShadow: theme.shadows[3], // Sombra suave
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10), // Aumenta el tamaño del avatar
  height: theme.spacing(10),
  margin: "auto",
  marginBottom: theme.spacing(2),
}));

const testimonials = [
  {
    name: "Juan Pérez",
    text: "Este producto cambió mi vida. ¡Totalmente recomendado!",
    avatar: "/testimonials/profile1.jpg",
  },
  {
    name: "María García",
    text: "La mejor compra que he hecho. Calidad excepcional y muy fácil de usar.",
    avatar: "/testimonials/profile2.jpg",
  },
  {
    name: "Carlos Rodríguez",
    text: "Excelente servicio al cliente y el producto es de primera calidad.",
    avatar: "/testimonials/profile3.jpg",
  },
  {
    name: "Ana López",
    text: "Muy satisfecho con los resultados. Recomendado al 100%.",
    avatar: "/testimonials/profile4.jpg",
  },
  {
    name: "Pedro Martínez",
    text: "Un producto de alta calidad y un servicio excepcional.",
    avatar: "/testimonials/profile6.jpg",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, // Modo móvil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Modo tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TestimonialsContainer>
      <Typography variant="h4" gutterBottom>
        Lo que nuestros clientes dicen
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} padding={2}>
            <TestimonialCard>
              <TestimonialAvatar src={testimonial.avatar} />
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.text}
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Box>
        ))}
      </Slider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
