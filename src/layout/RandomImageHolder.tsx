import { Box, CssBaseline, Typography } from "@mui/material";
import { ReactNode } from "react";
import RandomImage from "../homepage/RandomImage";

interface RandomImageHolderProps {
  children: ReactNode;
  isHomePage: boolean;
}

const RandomImageHolder: React.FC<RandomImageHolderProps> = ({
  isHomePage,
}) => {
  if (!isHomePage) {
    return null;
  }
  const initialImageUrl =
    "https://cdn.pixabay.com/photo/2014/10/10/10/49/moss-483206_1280.jpg";
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "250px",
          height: "250px",
          backgroundColor: "rgba(200, 200, 200, 0.4)",
          borderRadius: "10px",
          boxShadow:
            "inset 0 0 0 1px rgba(255, 255, 255, 0.6), 0 8px 10px rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(3px)",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Moss generator
        </Typography>
        <RandomImage imageSrc={initialImageUrl} />
      </Box>
    </>
  );
};

export default RandomImageHolder;
