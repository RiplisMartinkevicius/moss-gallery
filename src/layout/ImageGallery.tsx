import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

interface ImageGalleryProps {
  children: ReactNode;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ children }) => {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
