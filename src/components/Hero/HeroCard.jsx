import React from "react";
import Button from "../Button/Button";
import HeroImage from "./HeroImage";
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const HeroCard = ({ title, subtitle, link, buttonText, imgSrc, imgAlt }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeroImage src={imgSrc} alt={imgAlt} />
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <Link to={link}>
          <Button variant="black">{buttonText}</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default HeroCard;
