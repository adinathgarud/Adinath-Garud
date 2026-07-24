import { Container, Typography } from "@mui/material";

export default function Certifications() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Certifications
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        My certifications and professional achievements.
      </Typography>
    </Container>
  );
}