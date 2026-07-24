import { Box, Container } from "@mui/material";

export default function Section({
  id,
  children,
  background = "background.default",
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: {
          xs: 8,
          sm: 10,
          md: 12,
          lg: 14,
        },
        background,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}