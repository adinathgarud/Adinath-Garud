import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Contact Me
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Feel free to get in touch for opportunities or collaboration.
      </Typography>
    </Container>
  );
}