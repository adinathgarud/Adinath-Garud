import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const navItems = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "resume",
  "contact",
];

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#020617",
        pt: 10,
        pb: 5,
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Container maxWidth="lg">

        <Grid container spacing={6}>

          {/* Left */}

          <Grid item xs={12} md={5}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >

              <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
              >
                Adinath Garud
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 2 }}
              >
                Data Engineer
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 3,
                  lineHeight: 2,
                  maxWidth: 420,
                }}
              >
                Passionate about building scalable ETL
                pipelines, cloud-based data platforms,
                and efficient software solutions using
                Python, SQL, Databricks and Azure.
              </Typography>

            </motion.div>

          </Grid>

          {/* Center */}

          <Grid item xs={12} md={3}>

            <Typography
              variant="h5"
              mb={3}
            >
              Quick Links
            </Typography>

            <Stack spacing={2}>

              {navItems.map((item) => (

                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{
                    cursor: "pointer",
                    color: "#CBD5E1",
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </Link>

              ))}

            </Stack>

          </Grid>

          {/* Right */}

          <Grid item xs={12} md={4}>

            <Typography
              variant="h5"
              mb={3}
            >
              Connect With Me
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mb={4}
            >

              <IconButton
                href="https://github.com/"
                target="_blank"
                sx={{
                  bgcolor: "#1E293B",

                  "&:hover": {
                    bgcolor: "#00BCD4",
                  },
                }}
              >
                <FaGithub />
              </IconButton>

              <IconButton
                href="https://linkedin.com/"
                target="_blank"
                sx={{
                  bgcolor: "#1E293B",

                  "&:hover": {
                    bgcolor: "#0077B5",
                  },
                }}
              >
                <FaLinkedin />
              </IconButton>

              <IconButton
                href="mailto:your@email.com"
                sx={{
                  bgcolor: "#1E293B",

                  "&:hover": {
                    bgcolor: "#FF5252",
                  },
                }}
              >
                <FaEnvelope />
              </IconButton>

            </Stack>

            <Link
              to="home"
              smooth={true}
              duration={700}
            >

              <IconButton
                sx={{
                  bgcolor: "primary.main",

                  width: 55,

                  height: 55,

                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <FaArrowUp />
              </IconButton>

            </Link>

          </Grid>

        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            mt: 8,
            pt: 4,
            textAlign: "center",
          }}
        >

          <Typography color="text.secondary">

            © {new Date().getFullYear()} Adinath Garud

          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >

            Made with

            <FaHeart color="#FF5252" />

            using React & Material UI

          </Typography>

        </Box>

      </Container>
    </Box>
  );
}