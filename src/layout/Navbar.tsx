import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Typography, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link, useLocation } from "react-router-dom";
import ForestIcon from "@mui/icons-material/Forest";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
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
      width: "15ch",
      "&:focus": {
        width: "21ch",
      },
    },
  },
}));

const Navbar = () => {
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchKeyword.trim() !== "") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchKeyword
      )}`;
      window.location.href = searchUrl;
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

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
        <ForestIcon
          sx={{
            fontSize: "40px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0.5rem",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
          >
            MOSS
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
          >
            LOVE
          </Typography>
        </Box>
      </Box>

      <Toolbar
        sx={{
          marginLeft: "auto",
          marginTop: "1rem",
          marginBottom: "13px",
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="text"
          disabled={location.pathname === "/"}
          sx={{
            width: "30%",
            fontSize: "16.38px",
            color: "white",
            justifyContent: "center",
            textTransform: "none",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(211, 211, 211, 0.5)",
            },
            "&:disabled": {
              opacity: 0.5,
              color: "red",
            },
          }}
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/gallery"
          variant="text"
          sx={{
            width: "30%",
            fontSize: "16.38px",
            color: "white",
            justifyContent: "flex-center",
            textTransform: "none",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(211, 211, 211, 0.5)",
            },
          }}
        >
          Gallery
        </Button>
        <Button
          component={Link}
          to="/about-moss"
          variant="text"
          sx={{
            width: "60%",
            fontSize: "16.38px",
            color: "white",
            justifyContent: "flex-center",
            textTransform: "none",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(211, 211, 211, 0.5)",
            },
          }}
        >
          What is moss?
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="text"
          sx={{
            width: "0%",
            fontSize: "16.38px",
            color: "white",
            justifyContent: "flex-center",
            textTransform: "none",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(211, 211, 211, 0.5)",
            },
          }}
        >
          Contact
        </Button>
        <Search onSubmit={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Google Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchKeyword}
            onChange={handleInputChange}
          />
        </Search>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
