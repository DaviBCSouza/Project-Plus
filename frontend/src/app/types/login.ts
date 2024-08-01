export interface SecondaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ImageWithTextProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  text: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const initialLoginState: LoginData = {
  email: "",
  password: "",
};
