import React, { useState, useContext } from "react";
import { AuthContext } from "../../../services/auth/AuthContext";
import { types } from "../../../services/types/types";
import { Link } from "react-router-dom";
import useForm from "../../../services/hooks/useForm";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts/Main/Layout";
import Form from "../../../components/Form/Form";

const Login = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    authDispatch({ type: types.LOGIN, payload: { name: form.name } });

    navigate("/", {
      replace: true,
    });
  };

  const [form, handleChange, handleSubmit] = useForm(
    {
      name: "",
      pass: "",
    },
    handleLogin
  );

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form
            type={"login"}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
