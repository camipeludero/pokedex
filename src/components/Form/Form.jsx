import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "./TextField";
import YellowButton from "../Button/YellowButton";

const Form = ({ formType, handleChange, handleSubmit }) => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3 className="extra_bold_36">
            {formType === "signup" ? "Sign up" : "Login"}
          </h3>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type={"text"}
            onChange={handleChange}
            name={"name"}
            placeholder={"Usuario"}
          />
        </Grid>
        {formType === "signup" && (
          <Grid item xs={12}>
            <TextField
              type={"email"}
              onChange={handleChange}
              name={"email"}
              placeholder={"E-mail"}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            type={"password"}
            onChange={handleChange}
            name={"pass"}
            placeholder={"Contraseña"}
          />
        </Grid>
      </Grid>
      <YellowButton onClick={handleSubmit} variant="block">
        Registrarme
      </YellowButton>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <span className="medium_13">
            {formType === "signup"
              ? "Ya tienes una cuenta? "
              : "No tienes una cuenta? "}
          </span>
          <Link
            className="medium_13 color_fire"
            to={formType === "signup" ? "/login" : "/signup"}
          >
            {formType === "signup" ? "Inicia sesión" : "Registrate"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;