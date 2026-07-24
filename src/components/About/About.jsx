import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

import { motion } from "framer-motion";

import {
  FaDatabase,
  FaPython,
  FaCloud,
  FaCode,
} from "react-icons/fa";

import {
  MdWork,
  MdSchool,
} from "react-icons/md";

export default function About() {
  const cards = [
    {
      icon: <FaPython size={35} color="#00B8D4" />,
      title: "Python Development",
      description:
        "Experienced in Python programming for automation, ETL pipelines, data processing and backend development.",
    },
    {
      icon: <FaDatabase size={35} color="#00B8D4" />,
      title: "SQL & Databases",
      description:
        "Strong knowledge of SQL, MySQL, PostgreSQL, Oracle and database optimization techniques.",
    },
    {
      icon: <FaCloud size={35} color="#00B8D4" />,
      title: "Cloud & Big Data",
      description:
        "Learning Azure, Databricks, Apache Spark, Data Lake and modern cloud-based data engineering.",
    },
    {
      icon: <FaCode size={35} color="#00B8D4" />,
      title: "Software Development",
      description:
        "Background in ReactJS, REST APIs, Git, Material UI and full-stack application development.",
    },
  ];

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#111827",
      }}
    >
      <Container maxWidth="lg">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            About Me
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 8,
            }}
          >
            I am a passionate Data Engineer who enjoys transforming raw data into meaningful insights.
            My goal is to build scalable ETL pipelines, automate workflows, and create reliable
            data solutions that help businesses make better decisions.
          </Typography>
        </motion.div>

        {/* Main Grid */}

        <Grid container spacing={6} alignItems="center">

          {/* Left Side */}

          <Grid item xs={12} md={6}>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >

              <Typography variant="h4" fontWeight="bold" mb={3}>
                Who am I?
              </Typography>

              <Typography
                color="text.secondary"
                lineHeight={2}
                mb={3}
              >
                Hello! I'm <strong>Adinath Garud</strong>, an aspiring Data Engineer with a strong
                foundation in Python, SQL, Data Warehousing, ETL Pipelines, Apache Spark,
                Databricks and Cloud Technologies.

                I enjoy solving complex business problems using data and continuously learning
                modern data engineering tools.
              </Typography>

              <Stack
                spacing={2}
                mt={4}
              >

                <Stack direction="row" spacing={2} alignItems="center">
                  <MdWork color="#00B8D4" size={28}/>
                  <Typography>
                    System Engineer • Tech Mahindra
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <MdSchool color="#00B8D4" size={28}/>
                  <Typography>
                    B.Sc Computer Science
                  </Typography>
                </Stack>

              </Stack>

              <Stack
  direction="row"
  useFlexGap
  sx={{
    mt: 5,
    flexWrap: "wrap",
    gap: 1.2,
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "flex-start",
    },
  }}
>
  {[
    "Python",
    "SQL",
    "PySpark",
    "Databricks",
    "Azure",
    "ETL",
    "Git",
    "ReactJS",
  ].map((skill) => (
    <Chip
      key={skill}
      label={skill}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "20px",
        fontWeight: 500,
      }}
    />
  ))}
</Stack>

            </motion.div>

          </Grid>

          {/* Right Side */}

          <Grid item xs={12} md={6}>

            <Grid container spacing={3}>

              {cards.map((card,index)=>(

                <Grid item xs={12} sm={6} key={index}>

                  <motion.div
                    initial={{ opacity:0, scale:.8 }}
                    whileInView={{ opacity:1, scale:1 }}
                    transition={{ duration:.5, delay:index*.15 }}
                    viewport={{ once:true }}
                  >

                    <Paper
                      elevation={5}
                      sx={{
                        p:4,
                        height:"100%",
                        bgcolor:"#1E293B",
                        borderRadius:4,
                        transition:".3s",
                        "&:hover":{
                          transform:"translateY(-10px)",
                          boxShadow:"0px 0px 25px rgba(0,184,212,.3)"
                        }
                      }}
                    >

                      {card.icon}

                      <Typography
                        variant="h6"
                        mt={2}
                        mb={2}
                        fontWeight="bold"
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        {card.description}
                      </Typography>

                    </Paper>

                  </motion.div>

                </Grid>

              ))}

            </Grid>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}