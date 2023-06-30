import React, { ReactNode, CSSProperties } from "react";
import { Box, CssBaseline } from "@mui/material";
import backgroundImage from "./images/japan.jpg";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
  positionStyles?: CSSProperties & {
    position?: "absolute" | "relative" | "fixed";
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  positionStyles,
}) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& *": {
            color: "white",
          },
        }}
      >
        <Navbar />
        <Box
          sx={{
            position: "relative",
            margin: "20px",
            marginTop: "150px",
            width: "calc(100% - 40px)",
            backgroundColor: "rgba(200, 200, 200, 0.4)",
            borderRadius: "10px",
            boxShadow:
              "inset 0 0 0 1px rgba(255, 255, 255, 0.6), 0 8px 10px rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(3px)",
            padding: "1rem",
            ...positionStyles,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
