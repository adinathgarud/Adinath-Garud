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
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
} from "react-icons/fa";

const projects = [
  {
    title: "ETL Data Pipeline",

    category: "Data Engineering",

    color: "#00BCD4",

    description:
      "Designed and developed an end-to-end ETL pipeline that extracts data from multiple sources, transforms it using Python and loads it into a SQL database.",

    features: [
      "Automated ETL Workflow",
      "Logging & Monitoring",
      "Data Validation",
      "Exception Handling",
    ],

    technologies: [
      "Python",
      "SQL",
      "PySpark",
      "Databricks",
      "Azure",
    ],
  },

  {
    title: "Sales Analytics Dashboard",

    category: "Business Intelligence",

    color: "#7C4DFF",

    description:
      "Interactive dashboard built for analysing sales trends, customer behaviour and business KPIs using Power BI.",

    features: [
      "Interactive Dashboard",
      "KPIs",
      "Sales Insights",
      "Data Cleaning",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Python",
      "Excel",
    ],
  },

  {
    title: "Employee Management System",

    category: "Web Application",

    color: "#4CAF50",

    description:
      "A complete employee management portal with authentication, CRUD operations and responsive UI.",

    features: [
      "Authentication",
      "REST APIs",
      "CRUD",
      "Responsive Design",
    ],

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(180deg,#0F172A,#111827)",
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
            Featured Projects
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mt: 3,
              mb: 8,
              lineHeight: 2,
            }}
          >
            Some of my favourite projects that demonstrate
            my skills in Data Engineering, Software Development,
            Cloud Technologies and Business Intelligence.
          </Typography>

        </motion.div>

        <Grid container spacing={5}>

          {projects.map((project, index) => (

            <Grid
              item
              xs={12}
              md={6}
              lg={4}
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
                  delay: index * .2,
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

                    borderTop:
                      `5px solid ${project.color}`,

                    transition: ".4s",

                    "&:hover": {

                      transform:
                        "translateY(-12px)",

                      boxShadow:
                        `0 0 35px ${project.color}`,

                    },

                  }}

                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >

                    <FaDatabase
                      size={40}
                      color={project.color}
                    />

                    <Chip
                      label={project.category}
                      color="primary"
                    />

                  </Stack>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 2,
                      mb: 4,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    mb={2}
                  >
                    Key Features
                  </Typography>

                  <Stack
                    spacing={1.5}
                    mb={4}
                  >

                    {project.features.map((feature) => (

                      <Typography
                        key={feature}
                        color="text.secondary"
                      >
                        • {feature}
                      </Typography>

                    ))}

                  </Stack>

                  <Stack

                    direction="row"

                    spacing={1}

                    useFlexGap

                    flexWrap="wrap"

                    mb={4}

                  >

                    {project.technologies.map((tech) => (

                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                      />

                    ))}

                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                  >

                    <Button
                      variant="contained"
                      startIcon={<FaGithub />}
                      fullWidth
                    >
                      GitHub
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={
                        <FaExternalLinkAlt />
                      }
                      fullWidth
                    >
                      Demo
                    </Button>

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