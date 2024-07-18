"use client";

import { Box, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { FormData } from "../../types/signup";
import {
  getNextStep,
  getPrevStep,
  initialFormState,
  stepsCandidates,
} from "../../utils/stepUtils";
import Step1 from "./Step1";
import CandidatesStep2 from "./Step2";

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

const ProgressBar = styled(LinearProgress)({
  borderRadius: "5px",
  height: "10px",
  marginTop: "5%",
  backgroundColor: "rgba(255, 165, 0, 0.3)",
  ".MuiLinearProgress-bar": {
    backgroundColor: "orange",
  },
});

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [currentStep, setCurrentStep] = useState(0);

  const change =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = event.target as HTMLInputElement;
      const value = target.type === "checkbox" ? target.checked : target.value;
      setFormData({ ...formData, [field]: value });
    };

  const next = () => {
    setCurrentStep(getNextStep(currentStep, formData.userType));
  };

  const prev = () => {
    setCurrentStep(getPrevStep(currentStep));
  };

  const submit = () => {
    // Colocar aqui o que o form vai fazer quando der "submit"
    console.log("Form Enviado:", formData);
  };

  const steps = stepsCandidates;

  return (
    <FormBox>
      <Typography align="center" component="h2" variant="h6">
        <span style={{ color: "orange" }}>Bem vindo ao</span> CADASTRO
      </Typography>
      <ProgressBar
        variant="determinate"
        value={(currentStep / (steps - 1)) * 100}
      />
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
      {currentStep === 0 && (
        <Step1 formData={formData} handleChange={change} handleNext={next} />
      )}
      {currentStep === 1 && (
        <CandidatesStep2
          formData={formData}
          handleChange={change}
          handleSubmit={submit}
          handlePrev={prev}
        />
      )}
    </FormBox>
  );
};

export default SignupForm;
