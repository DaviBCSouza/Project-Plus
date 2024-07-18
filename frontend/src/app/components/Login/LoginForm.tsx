"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const FormBox = styled(Box)({
  position: "absolute",
  top: "15%",
  left: "10%",
  width: "425px",
  height: "450px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const StyledField = styled(TextField)({
  marginTop: "10%",
});

const LoginForm = () => (
  <FormBox>
    <Typography align="center" component="h2" variant="h6">
      Bem vindo ao <span style={{ color: "orange" }}>LOGIN</span>
    </Typography>
    <Typography
      align="center"
      color={"gray"}
      component="p"
      mt={"5%"}
      variant="body1"
    >
      Preencha os dados de login para acessar
    </Typography>
    <StyledField label="Email" margin="normal" variant="outlined" fullWidth />
    <StyledField
      label="Senha"
      margin="normal"
      type="password"
      variant="outlined"
      fullWidth
    />
    <Button
      color="primary"
      type="submit"
      variant="contained"
      sx={{
        mt: "10%",
      }}
      fullWidth
    >
      Entrar
    </Button>
    <Typography align="center" mt={"5%"}>
      Não possui uma conta?
      <Link href="/signup" passHref>
        <span
          style={{
            color: "orange",
            marginLeft: "5px",
            textDecoration: "underline",
          }}
        >
          Cadastre-se aqui
        </span>
      </Link>
    </Typography>
  </FormBox>
);

export default LoginForm;
