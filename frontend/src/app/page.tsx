import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography variant="h3">Project +</Typography>
      <Typography component="p">Hello, Project +</Typography>
    </Box>
  );
}
