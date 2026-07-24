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
  FaPython,
  FaDatabase,
  FaCloud,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

import { TbBrandDatabricks } from "react-icons/tb";

const skills = [
  {
    title: "Programming",
    icon: <FaPython size={32} />,
    description:
      "Languages used for backend development, automation and scripting.",
    color: "#3776AB",
    technologies: [
      "Python",
      "SQL",
      "JavaScript",
      "Java",
      "Bash",
    ],
  },

  {
    title: "Data Engineering",
    icon: <TbBrandDatabricks size={32} />,
    description:
      "Technologies used to build scalable ETL and Big Data pipelines.",
    color: "#FF6F00",
    technologies: [
      "PySpark",
      "Apache Spark",
      "Databricks",
      "ETL",
      "Kafka",
      "Airflow",
      "Delta Lake",
    ],
  },

  {
    title: "Databases",
    icon: <FaDatabase size={32} />,
    description:
      "Relational and NoSQL databases for storing structured data.",
    color: "#00BCD4",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MongoDB",
    ],
  },

  {
    title: "Cloud",
    icon: <FaCloud size={32} />,
    description:
      "Cloud services for scalable and secure data platforms.",
    color: "#2196F3",
    technologies: [
      "Azure",
      "Azure Data Factory",
      "Azure SQL",
      "Storage",
    ],
  },

  {
    title: "Tools",
    icon: <FaTools size={32} />,
    description:
      "Daily development and deployment tools.",
    color: "#9C27B0",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Power BI",
      "Postman",
    ],
  },

  {
    title: "Web Development",
    icon: <FaLaptopCode size={32} />,
    description:
      "Frontend and backend technologies used for applications.",
    color: "#4CAF50",
    technologies: [
      "ReactJS",
      "Material UI",
      "NodeJS",
      "REST APIs",
    ],
  },
];

export default function Skills() {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg,#0F172A,#111827)",
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          Technical Skills
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 8,
          }}
        >
          Technologies I use to design scalable data
          pipelines, automate workflows and build
          reliable software solutions.
        </Typography>

        <Grid container spacing={4}>

          {skills.map((skill, index) => (

            <Grid item xs={12} md={6} lg={4} key={index}>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
              >

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 5,
                    background: "#1E293B",
                    border: `1px solid ${skill.color}`,
                    transition: ".4s",

                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: `0 0 30px ${skill.color}`,
                    },
                  }}
                >

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    mb={3}
                  >

                    <Box
                      sx={{
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      fontWeight="bold"
                    >
                      {skill.title}
                    </Typography>

                  </Stack>

                  <Typography
                    color="text.secondary"
                    mb={3}
                  >
                    {skill.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                  >

                    {skill.technologies.map((tech) => (

                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          borderRadius: 2,
                          color: "white",
                          border: `1px solid ${skill.color}`,
                          transition: ".3s",

                          "&:hover": {
                            background: skill.color,
                            transform: "scale(1.08)",
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