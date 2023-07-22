import { Box, CardMedia, CssBaseline } from "@mui/material";
import { useState } from "react";

interface RandomImageProps {
  imageSrc: string;
}

const RandomImage: React.FC<RandomImageProps> = ({ imageSrc }) => {
  const [imageUrl, setImageUrl] = useState(imageSrc);

  const getRandomImage = () => {
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
          width: "200px",
          height: "200px",
          position: "relative",
          borderRadius: "8px",
        }}
        onClick={handleImageChange}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt="moss"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        />
      </Box>
    </>
  );
};

export default RandomImage;
