import { Box, Card, CardContent, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import gif from "../layout/images/grass.gif";

export default function ContactPage() {
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
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: 400,
              height: 200,
              backgroundImage: `url(${gif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <EmailIcon sx={{ marginRight: "0.5rem" }} />
                <Typography
                  variant="body1"
                  sx={{ textShadow: "2px 2px 4px #000" }}
                >
                  Email: mossarium@narapark.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <PhoneIcon sx={{ marginRight: "0.5rem" }} />
                <Typography
                  variant="body1"
                  sx={{ textShadow: "2px 2px 4px #000" }}
                >
                  Phone: +81 742-22-0375
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon
                  sx={{ marginRight: "0.5rem", textShadow: "2px 2px 4px #000" }}
                />
                <Typography
                  variant="body1"
                  sx={{ textShadow: "2px 2px 4px #000" }}
                >
                  Address: Sanjo Dori, Nara, Japan
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </MainLayout>
  );
}
