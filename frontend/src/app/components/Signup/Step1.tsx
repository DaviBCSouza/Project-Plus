import { Step1Props } from "@/app/types/signup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Step1: React.FC<Step1Props> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Box>
      <TextField
        label="Username"
        value={formData.name}
        onChange={handleChange("name")}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Email"
        value={formData.email}
        onChange={handleChange("email")}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Senha"
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Concluir
      </Button>
      <Typography align="center" mt={"5%"}>
        Já possui uma conta?
        <Link href="/login" passHref>
          <span
            style={{
              color: "orange",
              marginLeft: "5px",
              textDecoration: "underline",
            }}
          >
            Entre aqui
          </span>
        </Link>
      </Typography>
    </Box>
  );
};

export default Step1;
