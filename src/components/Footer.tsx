import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialMedia = [
    { name: "Facebook", icon: <Facebook />, url: "#" },
    { name: "Twitter", icon: <Twitter />, url: "#" },
    { name: "Instagram", icon: <Instagram />, url: "#" },
    { name: "LinkedIn", icon: <LinkedIn />, url: "#" },
  ];

  const hotelServices = [
    "Room Service",
    "Concierge",
    "Spa & Wellness",
    "Fine Dining",
    "Business Center",
    "Event Planning",
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Reservations", path: "/reservations" },
    { name: "Chauffeur", path: "/chauffeur" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        pt: 6,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Hotel Information */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 2, fontFamily: "Playfair Display" }}
              >
                Lincoln Hotels
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Experience luxury and comfort at its finest. Our premier hotel
                offers world-class amenities, exceptional service, and
                unforgettable experiences in the heart of the city.
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                {socialMedia.map((social) => (
                  <IconButton
                    key={social.name}
                    color="inherit"
                    component="a"
                    href={social.url}
                    sx={{
                      "&:hover": {
                        bgcolor: "secondary.main",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Services */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Our Services
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {hotelServices.map((service) => (
                  <Box
                    component="li"
                    key={service}
                    sx={{
                      mb: 1,
                      "&:hover": { color: "secondary.main" },
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {quickLinks.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <MuiLink
                      component={Link}
                      to={link.path}
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                        opacity: 0.9,
                        "&:hover": {
                          color: "secondary.main",
                          opacity: 1,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Typography variant="body2">{link.name}</Typography>
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Contact Us
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  123 Luxury Avenue, Downtown
                  <br />
                  New York, NY 10001
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@lincolnhotels.com
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>

        <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.2)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Lincoln Hotels. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: "pointer",
                "&:hover": { opacity: 1 },
                transition: "opacity 0.3s ease",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                cursor: "pointer",
                "&:hover": { opacity: 1 },
                transition: "opacity 0.3s ease",
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
