import { Box, Button, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import { mossCareTips } from "./MossCareTips";
import { funFacts } from "./MossFunFacts";
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
  const [funFact, setFunFact] = useState("");
  const [expandedTipIndex, setExpandedTipIndex] = useState<number | null>(null);

  const generateFunFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFunFact(funFacts[randomIndex]);
  };

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
        width: "40%",
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
        <Button
          variant="contained"
          onClick={generateFunFact}
          sx={{
            backgroundColor: "rgba(200, 225, 225, 0.7)",
            color: "#323232",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "10px 20px",
            marginBottom: "1rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(225, 225, 225, 0.9)",
            },
          }}
        >
          Click here for a fun fact about moss!
        </Button>
        {funFact && (
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              marginBottom: "1rem",
            }}
          >
            {funFact}
          </Typography>
        )}
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
          {mossCareTips.map((tip: MossCareTip, index: number) => (
            <li key={index}>
              <Button
                variant="text"
                onClick={() => handleTipToggle(index)}
                sx={{
                  width: "50%",
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
                <Typography
                  sx={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    marginBottom: "1rem",
                  }}
                >
                  {tip.description}
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </Box>
    </MainLayout>
  );
}
