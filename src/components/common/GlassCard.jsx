import { Paper } from "@mui/material";

export default function GlassCard({ children, sx = {} }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 3,
          sm: 4,
          md: 5,
        },

        borderRadius: 5,

        background: "rgba(30,41,59,.85)",

        backdropFilter: "blur(12px)",

        border: "1px solid rgba(255,255,255,.08)",

        transition: ".35s",

        height: "100%",

        "&:hover": {
          transform: "translateY(-8px)",

          boxShadow:
            "0px 15px 35px rgba(0,184,212,.15)",
        },

        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}