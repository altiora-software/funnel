import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const VideoContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));

const VideoFrame = styled("iframe")({
  width: "100%",
  height: "500px",
  border: "none",
});

const ProductVideo: React.FC = () => {
  return (
    <VideoContainer>
      <Typography variant="h4" gutterBottom>
        Cómo usar nuestro producto
      </Typography>
      <VideoFrame
        src="https://www.youtube.com/watch?v=z1CSneHgd6c"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default ProductVideo;
