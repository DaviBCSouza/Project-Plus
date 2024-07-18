import { Step1Props } from "@/app/types/signup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Step1: React.FC<Step1Props> = ({
  formData,
  handleChange,
  handleNext,
}) => {
  return (
    <Box>
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

      <Button
        color="primary"
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 2 }}
        fullWidth
      >
        Próximo
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
