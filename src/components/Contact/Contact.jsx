import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Pune, Maharashtra, India",
    color: "#00BCD4",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "adinath@email.com",
    color: "#7C4DFF",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    color: "#4CAF50",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/adinath",
    color: "#0A66C2",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/adinath",
    color: "#ffffff",
  },
];

export default function Contact() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(180deg,#111827,#0F172A)",
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
            Get In Touch
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
            Whether you have a job opportunity,
            project idea or simply want to connect,
            I'd love to hear from you.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>

          {/* Left Side */}

          <Grid item xs={12} md={5}>

            <Stack spacing={3}>

              {contactInfo.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * .1,
                  }}
                  viewport={{ once: true }}
                >

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "#1E293B",
                      transition: ".3s",

                      "&:hover": {
                        transform: "translateX(10px)",
                        boxShadow:
                          `0 0 20px ${item.color}`,
                      },
                    }}
                  >

                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="center"
                    >

                      <Box
                        sx={{
                          fontSize: 30,
                          color: item.color,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>

                        <Typography
                          fontWeight="bold"
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          color="text.secondary"
                        >
                          {item.value}
                        </Typography>

                      </Box>

                    </Stack>

                  </Paper>

                </motion.div>

              ))}

            </Stack>

          </Grid>

          {/* Right Side */}

          <Grid item xs={12} md={7}>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 5,
                  bgcolor: "#1E293B",
                }}
              >

                <Typography
                  variant="h4"
                  mb={4}
                >
                  Send Message
                </Typography>

                <Stack spacing={3}>

                  <TextField
                    fullWidth
                    label="Full Name"
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Message"
                  />

                  <Button
                    size="large"
                    variant="contained"
                    startIcon={<FaPaperPlane />}
                  >
                    Send Message
                  </Button>

                </Stack>

              </Paper>

            </motion.div>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}