import React, { ReactNode, CSSProperties } from "react";
import { Box, CssBaseline } from "@mui/material";
import backgroundImage from "./images/japan.jpg";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
  positionStyles?: CSSProperties & { position?: "absolute" | "relative" };
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
            position: "absolute",
            top: "130px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            backgroundColor: "rgba(225, 225, 225, 0.4)",
            borderRadius: "10px",
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

// import React, { ReactNode, CSSProperties } from "react";
// import { Box, CssBaseline } from "@mui/material";
// import backgroundImage from "./images/japan.jpg";
// import Navbar from "./Navbar";

// interface MainLayoutProps {
//   children: ReactNode;
//   positionStyles?: CSSProperties & { position?: "absolute" | "relative" };
// }

// const MainLayout: React.FC<MainLayoutProps> = ({
//   children,
//   positionStyles,
// }) => {
//   return (
//     <>
//       <CssBaseline />
//       <Box
//         sx={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           "& *": {
//             color: "white",
//           },
//         }}
//       >
//         <Navbar />
//         <Box
//           sx={{
//             position: "absolute",
//             top: "130px",
//             left: "20px",
//             right: "20px",
//             bottom: "20px",
//             backgroundColor: "rgba(225, 225, 225, 0.4)",
//             borderRadius: "10px",
//             backdropFilter: "blur(3px)",
//             padding: "1rem",
//             ...positionStyles,
//           }}
//         >
//           {children}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default MainLayout;
