import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const VideoContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));

const VideoFrame = styled("iframe")({
  width: "80%", // Reduce el ancho del video
  height: "450px",
  border: "none",
  margin: "0 auto", // Centra el video
  display: "block",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Añade sombra al video
});

const ProductVideo: React.FC = () => {
  return (
    <VideoContainer>
      <Typography variant="h4" gutterBottom>
        Cómo usar nuestro producto
      </Typography>
      <Box>
        <VideoFrame
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </VideoContainer>
  );
};

export default ProductVideo;
