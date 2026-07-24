import IconButton from "@mui/material/IconButton";

export default function SocialButton({
  icon,
  href,
  color = "#00BCD4",
}) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{
        width: 52,

        height: 52,

        background: "#1E293B",

        color: "white",

        border: "1px solid rgba(255,255,255,.08)",

        transition: ".35s",

        "&:hover": {
          background: color,

          transform: "translateY(-5px) scale(1.05)",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}