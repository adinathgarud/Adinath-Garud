import {
  Box,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .7,
      }}
      viewport={{
        once: true,
      }}
    >
      <Box
        sx={{
          textAlign: "center",

          maxWidth: 750,

          mx: "auto",

          mb: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      </Box>
    </motion.div>
  );
}