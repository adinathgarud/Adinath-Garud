import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import {
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "Python for Data Engineering",

    organization: "Coursera",

    date: "2025",

    level: "Professional",

    color: "#3776AB",

    description:
      "Learned advanced Python programming for data processing, automation, ETL development and scripting.",

    skills: [
      "Python",
      "Automation",
      "ETL",
      "Pandas",
    ],
  },

  {
    title: "Azure Data Engineer",

    organization: "Microsoft",

    date: "2026",

    level: "Associate",

    color: "#0078D4",

    description:
      "Hands-on knowledge of Azure Storage, Data Factory, Azure SQL, Data Lake and cloud-based ETL pipelines.",

    skills: [
      "Azure",
      "ADF",
      "Data Lake",
      "Azure SQL",
    ],
  },

  {
    title: "Databricks Fundamentals",

    organization: "Databricks Academy",

    date: "2026",

    level: "Professional",

    color: "#FF3621",

    description:
      "Worked with Spark, Delta Lake, Databricks notebooks and distributed data processing.",

    skills: [
      "Databricks",
      "Spark",
      "Delta Lake",
      "PySpark",
    ],
  },

  {
    title: "SQL Advanced",

    organization: "Udemy",

    date: "2025",

    level: "Advanced",

    color: "#00BCD4",

    description:
      "Mastered joins, window functions, stored procedures, indexing and query optimization.",

    skills: [
      "SQL",
      "MySQL",
      "Oracle",
      "PostgreSQL",
    ],
  },
];

export default function Certifications() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(180deg,#111827,#0F172A)",
      }}
    >
      <Container maxWidth="lg">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
          >
            Certifications
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              mt: 3,
              mb: 8,
              maxWidth: 720,
              mx: "auto",
              lineHeight: 2,
            }}
          >
            Continuous learning is a key part of my journey.
            These certifications represent my commitment to
            mastering Data Engineering, Cloud Technologies,
            Databases and Software Development.
          </Typography>

        </motion.div>

        <Grid container spacing={4}>

          {certifications.map((cert, index) => (

            <Grid
              item
              xs={12}
              md={6}
              key={index}
            >

              <motion.div

                initial={{
                  opacity: 0,
                  y: 70,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: .6,
                  delay: index * .15,
                }}

                viewport={{
                  once: true,
                }}

              >

                <Paper

                  elevation={0}

                  sx={{

                    p: 4,

                    borderRadius: 5,

                    height: "100%",

                    background: "#1E293B",

                    borderLeft:
                      `6px solid ${cert.color}`,

                    transition: ".4s",

                    "&:hover": {

                      transform:
                        "translateY(-10px)",

                      boxShadow:
                        `0 0 30px ${cert.color}`,

                    },

                  }}

                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >

                    <FaAward
                      size={40}
                      color={cert.color}
                    />

                    <Chip
                      label={cert.level}
                      color="primary"
                    />

                  </Stack>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                  >
                    {cert.title}
                  </Typography>

                  <Typography
                    color="primary"
                    mb={1}
                  >
                    {cert.organization}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mb={3}
                  >

                    <FaCalendarAlt
                      color={cert.color}
                    />

                    <Typography
                      color="text.secondary"
                    >
                      {cert.date}
                    </Typography>

                  </Stack>

                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 2,
                      mb: 4,
                    }}
                  >
                    {cert.description}
                  </Typography>

                  <Stack
                    direction="row"
                    useFlexGap
                    sx={{
                      flexWrap: "wrap",
                      gap: 1.2,
                      mt: 2,

                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                      },
                    }}
                  >

                    {cert.skills.map((skill) => (

                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                      />

                    ))}

                  </Stack>

                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={
                      <FaExternalLinkAlt />
                    }
                  >
                    View Credential
                  </Button>

                </Paper>

              </motion.div>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}