import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const styles = {
  logo: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "200px",
  },
  centeredLogo: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const Logo = () => {
  return (
    <>
      <div style={styles.centeredLogo}>
        <Link to={"/"}>
          <img src={logo} style={styles.logo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
