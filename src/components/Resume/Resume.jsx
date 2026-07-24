import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import {
  FaDownload,
  FaEye,
  FaFilePdf,
  FaProjectDiagram,
  FaAward,
  FaTools,
  FaBriefcase,
} from "react-icons/fa";

export default function Resume() {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(180deg,#111827,#0F172A)",
      }}
    >
      <Container maxWidth="lg">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
          >
            Resume
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              mt: 3,
              mb: 8,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 2,
            }}
          >
            Download or preview my resume to learn more
            about my professional journey, technical
            expertise and projects.
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">

          {/* LEFT */}

          <Grid item xs={12} md={6}>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >

              <Paper

                elevation={0}

                sx={{

                  overflow: "hidden",

                  borderRadius: 5,

                  background: "#1E293B",

                  border: "1px solid rgba(255,255,255,.1)",

                  transition: ".4s",

                  "&:hover": {

                    transform: "translateY(-10px)",

                    boxShadow:
                      "0 0 30px rgba(0,184,212,.35)",

                  }

                }}

              >

                <Box
                  component="img"
                  src="/resume-preview.png"
                  alt="Resume Preview"
                  sx={{
                    width: "100%",
                    display: "block",
                  }}
                />

              </Paper>

            </motion.div>

          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={6}>

            <motion.div

              initial={{ opacity: 0, x: 80 }}

              whileInView={{ opacity: 1, x: 0 }}

              transition={{ duration: .8 }}

              viewport={{ once: true }}

            >

              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
              >
                Data Engineer Resume
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 2,
                  mb: 5,
                }}
              >
                My resume highlights my experience in
                Data Engineering, Python, SQL,
                Databricks, Azure, ETL Pipelines,
                Cloud Technologies and Software
                Development.
              </Typography>

              {/* Stats */}

              <Grid container spacing={3} mb={5}>

                <Grid item xs={6}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      bgcolor: "#1E293B",
                    }}
                  >
                    <FaProjectDiagram
                      color="#00BCD4"
                      size={30}
                    />

                    <Typography
                      variant="h4"
                      mt={2}
                    >
                      12+
                    </Typography>

                    <Typography color="text.secondary">
                      Projects
                    </Typography>

                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      bgcolor: "#1E293B",
                    }}
                  >
                    <FaTools
                      color="#00BCD4"
                      size={30}
                    />

                    <Typography
                      variant="h4"
                      mt={2}
                    >
                      25+
                    </Typography>

                    <Typography color="text.secondary">
                      Skills
                    </Typography>

                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      bgcolor: "#1E293B",
                    }}
                  >
                    <FaBriefcase
                      color="#00BCD4"
                      size={30}
                    />

                    <Typography
                      variant="h4"
                      mt={2}
                    >
                      2+
                    </Typography>

                    <Typography color="text.secondary">
                      Years
                    </Typography>

                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      bgcolor: "#1E293B",
                    }}
                  >
                    <FaAward
                      color="#00BCD4"
                      size={30}
                    />

                    <Typography
                      variant="h4"
                      mt={2}
                    >
                      8+
                    </Typography>

                    <Typography color="text.secondary">
                      Certifications
                    </Typography>

                  </Paper>
                </Grid>

              </Grid>

              {/* Buttons */}

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >

                <Button

                  variant="contained"

                  size="large"

                  fullWidth

                  startIcon={<FaDownload />}

                  href="/resume.pdf"

                  download="Adinath_Garud_Resume.pdf"

                >
                  Download Resume
                </Button>

                <Button

                  variant="outlined"

                  size="large"

                  fullWidth

                  startIcon={<FaEye />}

                  href="/resume.pdf"

                  target="_blank"

                  rel="noopener noreferrer"

                >
                  View Resume
                </Button>

              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                mt={4}
              >

                <FaFilePdf
                  color="#FF5252"
                  size={28}
                />

                <Typography color="text.secondary">
                  PDF • Updated July 2026 • ATS Friendly Resume
                </Typography>

              </Stack>

            </motion.div>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}