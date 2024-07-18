"use client";

import { Circle } from "../components/Signup/Circle";
import ImageWithText from "../components/Signup/ImageWithText";
import SecondaryImage from "../components/Signup/SecondaryImage";
import SignupForm from "../components/Signup/SignupForm";

const SignupPage = () => {
  return (
    <>
      <Circle />
      <ImageWithText
        src="/assets/images/polygon.png"
        alt="Polygon"
        width={450}
        height={450}
        text="Faça o seu Cadastro em nossa Plataforma"
      />
      <SecondaryImage
        src="/assets/images/polygon_.png"
        alt="Polygon"
        width={300}
        height={300}
      />
      <SignupForm />
    </>
  );
};

export default SignupPage;
