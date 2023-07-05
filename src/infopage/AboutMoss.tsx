import { Box, CardMedia, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import mossImage from "../layout/images/about.jpg";

export default function AboutMoss() {
  return (
    <MainLayout>
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center the content horizontally
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
          }}
        >
          What is moss?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", md: "60%" },
              maxWidth: "400px",
              height: "600px",
              borderRadius: "20px",
              overflow: "hidden",
              marginRight: { md: "2rem" }, // Adjust the marginRight value for the image
            }}
          >
            <CardMedia
              component="img"
              image={mossImage}
              alt="moss"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              textAlign: { xs: "center", md: "left" },
              pl: { md: "2rem" },
              marginTop: { xs: "2rem", md: "0" }, // Adjust the marginTop value for the text
            }}
          >
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Moss is a small, non-vascular plant that belongs to the Bryophyte
              division. It is characterized by its green, carpet-like appearance
              and grows in damp, shady environments. Mosses play a crucial role
              in maintaining ecological balance by preventing soil erosion and
              providing habitats for various microorganisms.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                marginBottom: "1.5rem",
              }}
            >
              The unique structure of mosses allows them to absorb moisture from
              the air, making them well-adapted to survive in moisture-rich
              environments. Mosses reproduce by spores, which are released and
              dispersed to new locations, contributing to the cycle of life in
              nature.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                marginBottom: "1.5rem",
              }}
            >
              In gardens and landscaping, mosses are often used to create lush
              and natural-looking green carpets or add a touch of enchantment to
              rock gardens. Explore the beauty and diversity of mosses in our
              Moss Gallery, where you can find captivating images showcasing
              different species and habitats of mosses. Enjoy the serenity and
              intricacy of these miniature plants that contribute to the
              delicate balance of nature.
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}
