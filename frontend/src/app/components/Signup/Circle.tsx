"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Circle = styled(Box)({
  position: "absolute",
  right: 0,
  width: "300px",
  height: "285px",
  backgroundColor: "#14213D",
  borderRadius: "50%",
  boxShadow: "0 0 2px 0.1px rgba(0,120,240,51)",
});
