import { Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h2" fontWeight="bold">
        Projects
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Explore my Data Engineering and Software Development projects.
      </Typography>
    </Container>
  );
}