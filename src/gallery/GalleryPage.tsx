import { Box, Grid, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import GalleryImage from "./GalleryImage";
import finlandImage from "../layout/images/finland.jpg";
import japanImage from "../layout/images/japan2.jpg";
import mossImage from "../layout/images/moss.jpg";
import moss2Image from "../layout/images/moss2.jpg";
import moss3Image from "../layout/images/moss3.jpg";
import moss4Image from "../layout/images/moss4.jpg";
import moss5Image from "../layout/images/moss5.jpg";
import moss6Image from "../layout/images/moss6.jpg";
import moss7Image from "../layout/images/moss7.jpg";
import moss8Image from "../layout/images/moss8.jpg";
import moss9Image from "../layout/images/moss9.jpg";
import moss10Image from "../layout/images/moss10.jpg";

export default function GalleryPage() {
  const imagePaths = [
    {
      src: finlandImage,
      description:
        "Clusters of moss create miniature forests in unexpected places.",
    },
    {
      src: japanImage,
      description:
        "Moss adds a touch of enchantment to any garden or landscape.",
    },
    {
      src: mossImage,
      description: "A vibrant green carpet of moss adorns the forest floor.",
    },
    {
      src: moss2Image,
      description:
        "Soft and velvety to the touch, moss offers a soothing sensation.",
    },
    {
      src: moss3Image,
      description:
        "Mosses release spores, contributing to the cycle of life in nature.",
    },
    {
      src: moss4Image,
      description:
        "Mosses absorb moisture from the air, creating a refreshing ambiance.",
    },
    {
      src: moss5Image,
      description:
        "Moss-covered stones provide a natural refuge for small creatures.",
    },
    {
      src: moss6Image,
      description:
        "The intricate structure of moss leaves reveals nature's artistry.",
    },
    {
      src: moss7Image,
      description:
        "Mosses form a lush green tapestry on rocks and tree trunks.",
    },
    {
      src: moss8Image,
      description:
        "Tiny moss tendrils create a delicate and intricate pattern.",
    },
    {
      src: moss9Image,
      description:
        "This resilient plant thrives in moist and shaded environments.",
    },
    {
      src: moss10Image,
      description: "Mosses play a crucial role in preventing soil erosion.",
    },
  ];

  const getRandomImageSrc = () => {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex].src;
  };

  const randomImageSrc = getRandomImageSrc();

  return (
    <MainLayout>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          The Moss Gallery
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {imagePaths.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GalleryImage
                imageSrc={image.src}
                description={image.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
}
