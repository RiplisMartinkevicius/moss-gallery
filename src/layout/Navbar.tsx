import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import GrassIcon from "@mui/icons-material/Grass";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        margin: "20px",
        width: "calc(100% - 40px)",
        height: "80px",
        backgroundColor: "rgba(200, 200, 200, 0.4)",
        padding: "1rem",
        zIndex: 1,
        borderRadius: "10px",
        boxShadow:
          "inset 0 0 0 1px rgba(255, 255, 255, 0.6), 0 8px 10px rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GrassIcon />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0.5rem",
          }}
        >
          <h4>MOSS</h4>
          <h4 style={{ marginLeft: "0.5rem" }}>PICS</h4>
        </Box>
      </Box>

      <Toolbar sx={{ marginLeft: "auto", marginTop: "1rem" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            marginRight: "auto",
          }}
        >
          <li style={{ marginRight: "1rem" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <a href="/gallery">Gallery</a>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <a href="/about-moss">What is moss?</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}
