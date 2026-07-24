import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        About Me
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Learn more about my education, experience, and career journey.
      </Typography>
    </Container>
  );
}