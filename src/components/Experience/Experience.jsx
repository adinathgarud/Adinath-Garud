import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    company: "Tech Mahindra",
    role: "System Engineer",
    duration: "Jan 2025 - Present",
    color: "#00BCD4",

    responsibilities: [
      "Providing enterprise IT support to global clients.",
      "Troubleshooting Windows, Outlook and Office 365 issues.",
      "Working with SQL databases and application support.",
      "Managing incidents using ServiceNow.",
      "Supporting Active Directory user management.",
      "Automating repetitive tasks using Python.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Windows",
      "ServiceNow",
      "Office365",
      "Azure",
    ],
  },

  {
    company: "Personal Data Engineering Projects",
    role: "Data Engineer",
    duration: "2024 - Present",
    color: "#7C4DFF",

    responsibilities: [
      "Built end-to-end ETL pipelines.",
      "Worked with Apache Spark & PySpark.",
      "Developed Databricks notebooks.",
      "Created Data Warehouse projects.",
      "Implemented REST API integrations.",
      "Built Portfolio & Dashboard applications.",
    ],

    technologies: [
      "Python",
      "PySpark",
      "Databricks",
      "ETL",
      "Azure",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg,#111827,#0F172A)",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          Experience
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 8,
          }}
        >
          My professional experience, technical expertise,
          and continuous learning journey in software and
          data engineering.
        </Typography>

        <Grid container spacing={4}>

          {experiences.map((exp, index) => (

            <Grid item xs={12} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
              >

                <Paper
                  sx={{
                    p: 5,
                    borderRadius: 5,
                    bgcolor: "#1E293B",
                    borderLeft: `6px solid ${exp.color}`,
                    transition: ".4s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        `0 0 25px ${exp.color}`,
                    },
                  }}
                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >

                    <Box>

                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                      >
                        <FaBriefcase
                          color={exp.color}
                          size={28}
                        />

                        <Typography
                          variant="h4"
                          fontWeight="bold"
                        >
                          {exp.company}
                        </Typography>

                      </Stack>

                      <Typography
                        variant="h6"
                        mt={2}
                        color="primary"
                      >
                        {exp.role}
                      </Typography>

                    </Box>

                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <FaCalendarAlt color={exp.color} />

                      <Typography>
                        {exp.duration}
                      </Typography>
                    </Stack>

                  </Stack>

                  <Box mt={4}>

                    {exp.responsibilities.map((item, i) => (

                      <Stack
                        key={i}
                        direction="row"
                        spacing={2}
                        mb={2}
                        alignItems="center"
                      >

                        <FaCheckCircle
                          color={exp.color}
                        />

                        <Typography color="text.secondary">
                          {item}
                        </Typography>

                      </Stack>

                    ))}

                  </Box>

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

                    {exp.technologies.map((tech) => (

                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          color: "white",
                          border: `1px solid ${exp.color}`,

                          "&:hover": {
                            bgcolor: exp.color,
                          },
                        }}
                      />

                    ))}

                  </Stack>

                </Paper>

              </motion.div>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}