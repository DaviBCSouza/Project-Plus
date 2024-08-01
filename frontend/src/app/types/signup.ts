export interface ImageWithTextProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  text: string;
}

export interface SecondaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Step1Props {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  handleChange: (
    field: string
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: () => void;
}

export interface FormData {
  email: string;
  name: string;
  password: string;
}

export const initialFormState: FormData = {
  email: "",
  password: "",
  name: ""
};

export type AlertSeverity = "success" | "error";

export interface UserResponse {
  name: string;
  email: string;
  password: string;
  status: string;
}