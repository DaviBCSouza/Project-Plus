"use client";

import { SecondaryImageProps } from "@/app/types/login";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const SecondaryImageContainer = styled(Box)({
  position: "absolute",
  left: "10%",
  bottom: 0,
});

const SecondaryImage: React.FC<SecondaryImageProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <SecondaryImageContainer>
    <Image src={src} alt={alt} width={width} height={height} />
  </SecondaryImageContainer>
);

export default SecondaryImage;
