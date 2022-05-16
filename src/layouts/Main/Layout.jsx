import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
