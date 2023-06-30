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
    finlandImage,
    japanImage,
    mossImage,
    moss2Image,
    moss3Image,
    moss4Image,
    moss5Image,
    moss6Image,
    moss7Image,
    moss8Image,
    moss9Image,
    moss10Image,
  ];

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
          Welcome to the Moss Gallery
        </Typography>
        <Grid container justifyContent="center">
          {imagePaths.map((imagePath, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GalleryImage
                imageSrc={imagePath}
                description={`Description of Image ${index + 1}`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
}

// export default function GalleryPage() {
//   const imagePaths = [finlandImage, japanImage, mossImage, moss2Image];

//   return (
//     <MainLayout>
//       <Typography
//         variant="h3"
//         component="h1"
//         gutterBottom
//         sx={{
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
//           fontWeight: "bold",
//           textAlign: "center",
//         }}
//       >
//         Welcome to the Moss Gallery
//       </Typography>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         {imagePaths.map((imagePath, index) => (
//           <GalleryImage
//             key={index}
//             imageSrc={imagePath}
//             description={`Description of Image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </MainLayout>
//   );
// }
