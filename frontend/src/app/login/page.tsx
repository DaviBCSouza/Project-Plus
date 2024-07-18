"use client";

import { Circle } from "../components/Login/Circle";
import ImageWithText from "../components/Login/ImageWithText";
import LoginForm from "../components/Login/LoginForm";
import SecondaryImage from "../components/Login/SecondaryImage";

const LoginPage = () => {
  return (
    <>
      <Circle />
      <ImageWithText
        src="/assets/images/polygon.png"
        alt="Description of image"
        width={450}
        height={450}
        text="Faça o Login em nossa Plataforma"
      />
      <SecondaryImage
        src="/assets/images/polygon_.png"
        alt="Description of image"
        width={300}
        height={300}
      />
      <LoginForm />
    </>
  );
};

export default LoginPage;
