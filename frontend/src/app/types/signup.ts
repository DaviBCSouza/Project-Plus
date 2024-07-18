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
    userType: string;
    email: string;
    password: string;
  };
  handleChange: (
    field: string
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNext: () => void;
}

export interface Step2Props {
  formData: {
    username: string;
  };
  handleChange: (
    field: string
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handlePrev: () => void;
  handleSubmit: () => void;
}

export interface FormData {
  email: string;
  username: string;
  password: string;
}
