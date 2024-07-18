import { Step2Props } from "@/app/types/signup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CandidatesStep2: React.FC<Step2Props> = ({
  formData,
  handleChange,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Box>
      <Typography align="center" component="h2" variant="h6">
        Credenciais
      </Typography>
      <TextField
        label="Username"
        value={formData.username}
        onChange={handleChange("username")}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button onClick={handlePrev}>Anterior</Button>
        <Link href="/login">
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Concluir
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CandidatesStep2;
