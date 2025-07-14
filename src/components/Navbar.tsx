import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Reservations", path: "/reservations" },
    { name: "Chauffeur", path: "/chauffeur" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animation for navbar on mount
    gsap.fromTo(
      ".navbar-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, height: "100%", bgcolor: "primary.main" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": {
                bgcolor: "secondary.main",
                color: "primary.main",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: location.pathname === item.path ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem
          component={Link}
          to="/login"
          onClick={handleDrawerToggle}
          sx={{
            color: "white",
            textDecoration: "none",
            mt: 2,
            "&:hover": {
              bgcolor: "secondary.main",
              color: "primary.main",
            },
          }}
        >
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className="navbar-container"
        sx={{
          background: scrolled
            ? "rgba(26, 26, 26, 0.95)"
            : location.pathname === "/"
            ? "rgba(26, 26, 26, 0.8)"
            : "rgba(26, 26, 26, 1)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <Toolbar>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: "secondary.main",
                textDecoration: "none",
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Lincoln Hotels
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      borderBottom:
                        location.pathname === item.path
                          ? `2px solid ${theme.palette.secondary.main}`
                          : "none",
                      borderRadius: 0,
                      "&:hover": {
                        bgcolor: "transparent",
                        borderBottom: `2px solid ${theme.palette.secondary.main}`,
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  sx={{
                    color: "secondary.main",
                    borderColor: "secondary.main",
                    ml: 2,
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: 250 }}
              animate={{ x: 0 }}
              exit={{ x: 250 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {drawer}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Navbar;
