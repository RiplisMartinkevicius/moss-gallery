import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface GalleryImageProps {
  imageSrc: string;
  description: string;
}

const StyledCardContent = styled(CardContent)({
  padding: 0,
  "&:last-child": {
    paddingBottom: 0,
  },
});

const ImageContainer = styled(Box)({
  position: "relative",
  "&:hover .overlay": {
    opacity: 1,
  },
});

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
});

const Description = styled(Typography)({
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
});

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
      <Card sx={{ width: "80%" }}>
        <ImageContainer>
          <Box
            sx={{
              width: "100%",
              paddingTop: "100%",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              image={imageSrc}
              alt="moss"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <ImageOverlay className="overlay">
              <Description>{description}</Description>
            </ImageOverlay>
          </Box>
        </ImageContainer>
        <StyledCardContent>
          <Typography
            variant="body1"
            component="p"
            textAlign="center"
            color="text.primary"
          ></Typography>
        </StyledCardContent>
      </Card>
    </Box>
  );
};

export default GalleryImage;
