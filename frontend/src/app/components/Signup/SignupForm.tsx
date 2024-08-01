"use client";

import { useSignup } from "@/app/hooks/useSignUp";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { FormData, initialFormState } from "../../types/signup";
import Step1 from "./Step1";

const FormBox = styled(Box)({
  position: "absolute",
  top: "15%",
  right: "10%",
  width: "425px",
  height: "auto",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const { signup, openAlert, alertMessage, alertSeverity, setOpenAlert } =
    useSignup();

  const change =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = event.target as HTMLInputElement;
      const value = target.type === "checkbox" ? target.checked : target.value;
      setFormData({ ...formData, [field]: value });
    };

  const submit = async () => {
    try {
      await signup(formData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormBox>
      <Typography align="center" component="h2" variant="h6">
        <span style={{ color: "orange" }}>Bem vindo ao</span> CADASTRO
      </Typography>

      <Typography
        align="center"
        color={"gray"}
        component="p"
        mb={"5%"}
        mt={"5%"}
        variant="body1"
      >
        Preencha os dados para cadastro
      </Typography>
      <Step1 formData={formData} handleChange={change} handleSubmit={submit} />
      <Snackbar
        open={openAlert}
        autoHideDuration={2200}
        onClose={() => setOpenAlert(false)}
      >
        <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </FormBox>
  );
};

export default SignupForm;
