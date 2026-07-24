import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "100dvh", // Better for mobile browsers
          sm: "100vh",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxSizing: "border-box",

        px: {
          xs: 2, // 16px
          sm: 3, // 24px
          md: 4, // 32px
          lg: 6, // 48px
        },

        py: {
          xs: 10,
          sm: 12,
          md: 14,
        },

        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* Left Section */}

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
              >
                👋 Hello, I'm
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  mb: 2,
                }}
              >
                Adinath Garud
              </Typography>

              <Typography
                variant="h4"
                color="secondary"
                sx={{
                  height: 50,
                  mb: 3,
                }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                    strings: [
                      "Data Engineer",
                      "Python Developer",
                      "SQL Developer",
                      "PySpark Developer",
                      "Databricks Developer",
                      "Azure Data Engineer",
                    ],
                  }}
                />
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  mb: 4,
                  lineHeight: 2,
                }}
              >
                Passionate Data Engineer with experience in
                Python, SQL, Databricks, ETL Pipelines,
                Apache Spark, Azure, Data Warehousing,
                and REST APIs. I enjoy building scalable,
                efficient, and reliable data solutions that
                transform raw data into meaningful insights.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                useFlexGap
                sx={{
                  width: "100%",
                  alignItems: {
                    xs: "stretch",
                    sm: "center",
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<FaDownload />}
                  onClick={() => window.open("/resume/Adinath_Garud_Resume.pdf", "_blank")}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                  }}
                >
                  Resume
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaGithub />}
                  onClick={() =>
                    window.open("https://github.com/adinathgarud", "_blank")
                  }
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaLinkedin />}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/adinath-garud-0498b9242",
                      "_blank"
                    )
                  }
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                  }}
                >
                  LinkedIn
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaEnvelope />}
                  onClick={() =>
                    window.location.href = "adinathgarud123@gmail.com"
                  }
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "auto",
                    },
                  }}
                >
                  Email
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Section */}

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                display="flex"
                justifyContent="center"
              >
                <Avatar
                  src="/profile.png"
                  alt="Profile"
                  sx={{
                    width: 320,
                    height: 320,
                    border: "5px solid #00B8D4",
                    boxShadow:
                      "0px 0px 40px rgba(0,184,212,.5)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}