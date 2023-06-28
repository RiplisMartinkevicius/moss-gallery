import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import { mossCareTips } from "./MossCareTips";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import TerrainIcon from "@mui/icons-material/Terrain";
import NatureIcon from "@mui/icons-material/Nature";
import SpaIcon from "@mui/icons-material/Spa";
import YardIcon from "@mui/icons-material/Yard";
import PestControlIcon from "@mui/icons-material/PestControl";

interface MossCareTip {
  title: string;
  description: string;
  category: string;
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredTips: MossCareTip[] =
    selectedCategory === "All"
      ? mossCareTips
      : mossCareTips.filter(
          (tip: MossCareTip) => tip.category === selectedCategory
        );

  const [expandedTipIndex, setExpandedTipIndex] = useState<number | null>(null);

  const handleTipToggle = (index: number) => {
    if (expandedTipIndex === index) {
      setExpandedTipIndex(null);
    } else {
      setExpandedTipIndex(index);
    }
  };

  return (
    <MainLayout
      positionStyles={{
        width: "50%",
        left: "20px",
        right: "auto",
        marginRight: "auto",
        marginLeft: 0,
      }}
    >
      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
          }}
        >
          Welcome to the Moss Gallery
        </Typography>
        <Typography
          variant="body1"
          component="p"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            marginBottom: "1rem",
          }}
        >
          Explore the beauty and diversity of moss in our gallery. Discover
          captivating images and learn fascinating facts about moss.
        </Typography>
        {/* <Button
          //   component={GalleryPage}
          //   to="/gallery"
          variant="contained"
          size="large"
          sx={{ marginTop: "2rem" }}
        >
          View Gallery
        </Button> */}
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            marginBottom: "1rem",
          }}
        >
          Click here for a fun fact about moss!: randomfactgenerator
        </Typography>
        <Typography
          variant="body1"
          component="p"
          gutterBottom
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            marginBottom: "1rem",
          }}
        >
          Excited to grow your own moss after exploring the gallery? Check out
          these moss care tips to help you get started!
        </Typography>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filteredTips.map((tip: MossCareTip, index: number) => (
            <li key={index}>
              <Button
                variant="text"
                onClick={() => handleTipToggle(index)}
                sx={{
                  width: "30%",
                  justifyContent: "flex-center",
                  textTransform: "none",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(211, 211, 211, 0.5)",
                  },
                }}
              >
                {tip.title === "Watering" && <WaterDropIcon />}
                {tip.title === "Lighting" && <WbSunnyIcon />}
                {tip.title === "Humidity" && <WaterIcon />}
                {tip.title === "Air Circulation" && <AirIcon />}
                {tip.title === "Substrate" && <TerrainIcon />}
                {tip.title === "Propagation" && <NatureIcon />}
                {tip.title === "Moss Types" && <SpaIcon />}
                {tip.title === "Terrarium Care" && <YardIcon />}
                {tip.title === "Pest and Disease Control" && (
                  <PestControlIcon />
                )}
                <h3>{tip.title}</h3>
              </Button>
              {expandedTipIndex === index && (
                <div>
                  <p>{tip.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Box>
    </MainLayout>
  );
}
