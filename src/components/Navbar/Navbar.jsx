import { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import navigation from "../../data/navigation";

import GradientButton from "../common/GradientButton";

export default function Navbar() {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawer, setDrawer] = useState(false);

  const [active, setActive] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navigation.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <
            section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: ".35s",

          py: scrolled ? 0.5 : 1,

          background: scrolled
            ? "rgba(15,23,42,.85)"
            : "rgba(15,23,42,.45)",

          backdropFilter: "blur(18px)",

          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,.08)"
            : "none",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",

            width: "100%",

            mx: "auto",

            justifyContent: "space-between",
          }}
        >
          {/* Logo */}

          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            <Typography
              variant="h4"
              color="primary"
              fontWeight={700}
            >
              AG
            </Typography>
          </Link>

          {/* Desktop */}

          {!mobile && (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-70}
                  spy={true}
                >
                  <Box
                    sx={{
                      cursor: "pointer",

                      px: 2,

                      py: 1,

                      borderRadius: 2,

                      transition: ".3s",

                      color:
                        active === item.id
                          ? "primary.main"
                          : "text.primary",

                      fontWeight:
                        active === item.id
                          ? 700
                          : 500,

                      "&:hover": {
                        color: "primary.main",

                        background:
                          "rgba(255,255,255,.05)",
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </Link>
              ))}

              <GradientButton
                sx={{
                  ml: 2,
                }}
              >
                Hire Me
              </GradientButton>
            </Stack>
          )}

          {/* Mobile */}

          {mobile && (
            <IconButton
              color="inherit"
              onClick={() => setDrawer(true)}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,

            bgcolor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",

            justifyContent: "flex-end",

            p: 2,
          }}
        >
          <IconButton
            onClick={() => setDrawer(false)}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <List>
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setDrawer(false)}
            >
              <ListItemButton
                selected={active === item.id}
              >
                <ListItemText
                  primary={item.label}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>

        <Box
          sx={{
            p: 3,
          }}
        >
          <GradientButton
            fullWidth
          >
            Hire Me
          </GradientButton>
        </Box>
      </Drawer>
    </>
  );
}