import { Container, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Experience
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        My professional experience and work history.
      </Typography>
    </Container>
  );
}