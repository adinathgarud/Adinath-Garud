import { Container, Typography } from "@mui/material";

export default function Skills() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Skills
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        My technical skills in Data Engineering and Software Development.
      </Typography>
    </Container>
  );
}