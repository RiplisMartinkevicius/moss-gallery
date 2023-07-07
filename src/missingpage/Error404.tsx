import { useEffect } from "react";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import gif from "../layout/images/grass.gif";
import { Link } from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "3rem",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "white",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          404 - Page Not Found
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            marginBottom: "4rem",
            color: "white",
            textShadow:
              "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
          }}
        >
          The page you are looking for does not exist.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
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
          Go back whence you came from
        </Button>
      </Box>
    </>
  );
};

export default Error404;
