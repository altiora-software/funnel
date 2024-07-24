import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const VideoContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 2),
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
}));

const VideoWrapper = styled("div")({
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
  maxWidth: "100%",
  backgroundColor: "#000",
  marginBottom: "16px",
});

const VideoFrame = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
});

const ProductVideo: React.FC = () => {
  return (
    <VideoContainer>
      <Typography variant="h4" gutterBottom>
        Cómo usar nuestro producto
      </Typography>
      <VideoWrapper>
        <VideoFrame
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default ProductVideo;
