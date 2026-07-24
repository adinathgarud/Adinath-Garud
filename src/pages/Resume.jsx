import { Container, Typography } from "@mui/material";

export default function Resume() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Resume
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Download or view my latest resume.
      </Typography>
    </Container>
  );
}