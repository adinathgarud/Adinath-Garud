import Chip from "@mui/material/Chip";

export default function TechChip({
  label,
}) {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderRadius: 2,

        color: "white",

        borderColor: "#00B8D4",

        transition: ".3s",

        "&:hover": {
          background: "#00B8D4",

          transform: "scale(1.05)",
        },
      }}
    />
  );
}