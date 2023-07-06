import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";

const RandomImage = ({ imageSrc }) => {
  const [imageUrl, setImageUrl] = useState(imageSrc);

  const getRandomImage = () => {
    const imageWidth = 500;
    const randomId = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/featured/?moss?${randomId}`;
  };

  const handleImageChange = () => {
    const newImageUrl = getRandomImage();
    setImageUrl(newImageUrl);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          margin: "20px",
          marginTop: "150px",
          height: "200px",
          width: "200px",
          backgroundColor: "rgba(200, 200, 200, 0.4)",
          borderRadius: "10px",
          boxShadow:
            "inset 0 0 0 1px rgba(255, 255, 255, 0.6), 0 8px 10px rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(3px)",
          padding: "1rem",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={handleImageChange}
      ></Box>
    </>
  );
};

export default RandomImage;
