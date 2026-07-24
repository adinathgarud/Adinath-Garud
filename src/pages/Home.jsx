import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Home
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Welcome to my Data Engineer Portfolio.
      </Typography>
    </Container>
  );
}