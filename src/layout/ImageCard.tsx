import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import exampleMoss from "./images/moss.jpg";

interface ImageCardProps {
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, description }) => {
  return (
    <Card>
      <img
        src={exampleMoss}
        alt={title}
        style={{ width: "300px", height: "300px" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
