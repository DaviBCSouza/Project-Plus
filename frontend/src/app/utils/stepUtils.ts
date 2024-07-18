import { FormData } from "../types/signup";

export const initialFormState: FormData = {
  email: "",
  password: "",
  username: ""
};

export const stepsCandidates = 2;

export const getNextStep = (currentStep: number, userType: string) => {
  if (userType === "Candidato" && currentStep < stepsCandidates - 1) {
    return currentStep + 1;
  }
  return currentStep;
};

export const getPrevStep = (currentStep: number) => {
  if (currentStep > 0) {
    return currentStep - 1;
  }
  return currentStep;
};
