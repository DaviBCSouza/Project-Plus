"use client";

import { SecondaryImageProps } from "@/app/types/signup";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const ImageContainer = styled(Box)({
  position: "absolute",
  right: "10%",
  bottom: 0,
});

const SecondaryImage: React.FC<SecondaryImageProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <ImageContainer>
    <Image src={src} alt={alt} width={width} height={height} priority />
  </ImageContainer>
);

export default SecondaryImage;
