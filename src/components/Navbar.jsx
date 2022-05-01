import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Fab } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Navbar = () => {
  return (
    <>
      <Box
        position="fixed"
        sx={{
          display: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          },

          top: "auto",
          width: "100vw",
          bottom: "5%",
        }}
      >
        <NavLink
          to={`/store`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          <Fab color="primary" aria-label="store" size="medium">
            <StorefrontIcon />
          </Fab>
        </NavLink>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          {" "}
          <Fab color="warning" aria-label="home">
            <HomeIcon />
          </Fab>
        </NavLink>
        <NavLink
          to={`/profile`}
          className={({ isActive }) => (isActive ? "selected-link" : undefined)}
        >
          <Fab color="primary" aria-label="profile" size="medium">
            <PersonOutlineIcon />
          </Fab>
        </NavLink>
      </Box>
    </>
  );
};

export default Navbar;
