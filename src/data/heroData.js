// src/data/heroData.js

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const heroData = {
  // ==========================
  // Basic Information
  // ==========================

  firstName: "Adinath",

  lastName: "Garud",

  fullName: "Adinath Garud",

  designation: "Data Engineer",

  greeting: "Hello, I'm",

  profileImage: "/profile.png",

  resume: "/resume.pdf",

  // ==========================
  // Hero Description
  // ==========================

  description:
    "Passionate Data Engineer with experience in Python, SQL, ETL Pipelines, Databricks, Apache Spark, Azure and Data Warehousing. I enjoy building scalable data solutions, automating workflows and transforming raw data into meaningful business insights.",

  // ==========================
  // Typewriter Text
  // ==========================

  typewriter: [
    "Data Engineer",
    "Python Developer",
    "SQL Developer",
    "ETL Developer",
    "PySpark Developer",
    "Databricks Developer",
    "Azure Data Engineer",
  ],

  // ==========================
  // Technologies
  // ==========================

  technologies: [
    "Python",
    "SQL",
    "PySpark",
    "Databricks",
    "Azure",
    "ETL",
    "Spark",
    "Airflow",
    "Kafka",
    "Docker",
    "Git",
    "Power BI",
  ],

  // ==========================
  // Social Links
  // ==========================

  socialLinks: [
    {
      name: "GitHub",

      icon: FaGithub,

      url: "https://github.com/your-github",
    },

    {
      name: "LinkedIn",

      icon: FaLinkedin,

      url: "https://linkedin.com/in/your-linkedin",
    },

    {
      name: "Email",

      icon: FaEnvelope,

      url: "mailto:your-email@gmail.com",
    },
  ],

  // ==========================
  // Statistics
  // ==========================

  stats: [
    {
      value: "2+",
      label: "Years Experience",
    },

    {
      value: "12+",
      label: "Projects",
    },

    {
      value: "25+",
      label: "Skills",
    },

    {
      value: "8+",
      label: "Certifications",
    },
  ],

  // ==========================
  // Buttons
  // ==========================

  buttons: {
    resume: {
      label: "Download Resume",

      link: "/resume.pdf",

      fileName: "Adinath_Garud_Resume.pdf",
    },

    projects: {
      label: "View Projects",

      scrollTo: "projects",
    },
  },
};

export default heroData;