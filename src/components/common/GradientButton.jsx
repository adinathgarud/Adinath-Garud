import Button from "@mui/material/Button";

export default function GradientButton({
  children,
  ...props
}) {
  return (
    <Button
      variant="contained"
      size="large"
      {...props}
      sx={{
        px: 4,

        py: 1.5,

        borderRadius: 3,

        fontWeight: 600,

        background:
          "linear-gradient(135deg,#00B8D4,#7C4DFF)",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-4px)",

          boxShadow:
            "0px 10px 30px rgba(0,184,212,.35)",
        },

        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}