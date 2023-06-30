import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface GalleryImageProps {
  imageSrc: string;
  description: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  imageSrc,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <Card sx={{ width: "200px" }}>
        <CardMedia component="img" height="200px" image={imageSrc} alt="moss" />
        <CardContent>
          <Typography
            variant="body1"
            component="p"
            textAlign="center"
            color="text.primary"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GalleryImage;
