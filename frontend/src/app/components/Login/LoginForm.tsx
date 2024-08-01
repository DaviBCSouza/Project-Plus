"use client";

import { useLogin } from "@/app/hooks/useLogin";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { useState } from "react";

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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    login,
    loading,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  } = useLogin();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
      <TextField
        label="Email"
        margin="normal"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginTop: "10%" }}
        fullWidth
      />
      <TextField
        label="Senha"
        margin="normal"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginTop: "10%" }}
        fullWidth
      />
      <Button
        color="primary"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          mt: "10%",
        }}
        disabled={loading}
        fullWidth
      >
        Entrar
      </Button>
      <Snackbar
        open={openAlert}
        autoHideDuration={2200}
        onClose={() => setOpenAlert(false)}
      >
        <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
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
};

export default LoginForm;
