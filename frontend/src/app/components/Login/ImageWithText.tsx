"use client";

import { ImageWithTextProps } from "@/app/types/login";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const ImageContainer = styled(Box)({
  position: "absolute",
  left: "60%",
  bottom: "20%",
});

const Text = styled(Typography)({
  color: "white",
  maxWidth: "60%",
  fontSize: "24px",
  fontStyle: "italic",
  position: "absolute",
  bottom: "45%",
  left: "20%",
});

const ImageWithText: React.FC<ImageWithTextProps> = ({
  src,
  alt,
  width,
  height,
  text,
}) => (
  <ImageContainer>
    <Image src={src} alt={alt} width={width} height={height} />
    <Text align="center" variant="h6">
      {text}
    </Text>
  </ImageContainer>
);

export default ImageWithText;
