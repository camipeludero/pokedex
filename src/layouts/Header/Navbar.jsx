import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, matchRoutes } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <Fab
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          filter: "drop-shadow(0px 2px 0px #18191F)",
          border: "2px solid #18191F",
          backgroundColor: "#ffffff",
          boxShadow: "none",
        }}
        color="primary"
        aria-label="add"
      >
        <MenuIcon sx={{ color: "#18191F" }} />
      </Fab>

      <Drawer open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: "300px" }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to={"/"} className={"navlink"}>
              <ListItem>Home</ListItem>
            </Link>
            <Link to={"/pokedex"} className={"navlink"}>
              <ListItem>Pokedex</ListItem>
            </Link>
            <Link to={"/battle"} className={"navlink"}>
              <ListItem>Games</ListItem>
            </Link>
            <Link to={"/profile"} className={"navlink"}>
              <ListItem>Profile</ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
