import React, { useContext } from "react";
import { AuthContext } from "../../../services/auth/AuthContext";
import { types } from "../../../services/types/types";
import useForm from "../../../services/hooks/useForm";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts/Main/Layout";

import Form from "../../../components/Form/Form";

const SignUp = () => {
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

  console.log(form);

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form
            formType="signup"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default SignUp;
