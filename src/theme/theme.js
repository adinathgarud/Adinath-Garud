import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#00B8D4",
      light: "#4DD0E1",
      dark: "#0097A7",
    },

    secondary: {
      main: "#7C4DFF",
      light: "#B388FF",
      dark: "#651FFF",
    },

    success: {
      main: "#4CAF50",
    },

    warning: {
      main: "#FFC107",
    },

    error: {
      main: "#EF5350",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },

    divider: "rgba(255,255,255,0.08)",
  },

  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },

    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h3: {
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
    },

    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.9,
      color: "#CBD5E1",
    },

    body2: {
      fontSize: ".9rem",
      lineHeight: 1.8,
      color: "#94A3B8",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 18,
  },

  spacing: 8,

  components: {

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          paddingRight: "20px",

          "@media (min-width:900px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,.08)",
          transition: "all .35s ease",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontWeight: 600,
        },

        contained: {
          background:
            "linear-gradient(135deg,#00B8D4,#7C4DFF)",

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow:
              "0 10px 30px rgba(0,184,212,.35)",
          },
        },

        outlined: {
          borderWidth: "1.5px",

          "&:hover": {
            borderWidth: "1.5px",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 500,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15,23,42,.75)",
          backdropFilter: "blur(18px)",
          boxShadow: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;