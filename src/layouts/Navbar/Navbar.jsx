import React from "react";
import style from "./Navbar.module.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = style.navbar_item_active;

  const links = [
    { icon: <CatchingPokemonIcon />, title: "Pokedex", link: "/pokedex" },
    { icon: <HomeRoundedIcon />, title: "Home", link: "/" },
    { icon: <SportsEsportsRoundedIcon />, title: "Games", link: "/battle" },
    { icon: <AccountCircleRoundedIcon />, title: "Profile", link: "/profile" },
  ];
  return (
    <div className={style.navbar}>
      {links.map((link) => {
        return (
          <NavLink
            to={link.link}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className={style.navbar_item}>
              {link.icon}
              <p className={`extra_bold_12`}>{link.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
