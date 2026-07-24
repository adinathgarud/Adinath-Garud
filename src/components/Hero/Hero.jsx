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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* Left Section */}

          <Grid size={{xs:12, md:7}}>
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
                direction="row"
                spacing={2}
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<FaDownload />}
                >
                  Resume
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaGithub />}
                >
                  GitHub
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FaEnvelope />}
                >
                  Email
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Section */}

          <Grid size={{xs:12, md:5}}>
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