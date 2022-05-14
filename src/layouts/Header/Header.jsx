import React from "react";
import Logo from "./Logo";
import { AppBar, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#ffffff" }} elevation={0}>
          <StyledToolbar>
            <Logo />
            {
              //todo: Add Pokecoins info when user is authenticated
            }
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
