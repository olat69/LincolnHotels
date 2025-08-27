import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  CheckCircle,
  Spa,
  Restaurant,
  Pool,
  FitnessCenter,
  BusinessCenter,
  LocalLaundryService,
  RoomService,
  Wifi,
  LocalParking,
  AirportShuttle,
  Pets,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".services-hero",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".service-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  const roomTypes = [
    {
      name: "Presidential Suite",
      image: "../images/presidential.png",
      price: "$999/night",
      size: "120 sqm",
      features: ["Ocean View", "Private Balcony", "Butler Service", "Jacuzzi"],
      description:
        "Ultimate luxury with panoramic views and exclusive amenities.",
    },
    {
      name: "Executive Suite",
      image: "../images/executive-room.jpg",
      price: "$699/night",
      size: "80 sqm",
      features: [
        "City View",
        "Living Area",
        "Work Desk",
        "Mini Bar",
        "Smart TV",
      ],
      description:
        "Sophisticated accommodation perfect for business travelers.",
    },
    {
      name: "Deluxe King Room",
      image: "../images/DeluxeKingRoom.png",
      price: "$399/night",
      size: "45 sqm",
      features: ["King Bed", "City View", "Modern Bathroom", "Smart TV"],
      description: "Elegant comfort with modern amenities and stylish design.",
    },
    {
      name: "Superior Twin Room",
      image: "../images/SuperiorTwinRoom.jpg",
      price: "$349/night",
      size: "40 sqm",
      features: ["Twin Beds", "Garden View", "Work Area", "Rain Shower"],
      description: "Comfortable accommodation ideal for friends or colleagues.",
    },
    {
      name: "Family Suite",
      image: "../images/family_suite.jpg",
      price: "$599/night",
      size: "65 sqm",
      features: ["Separate Bedroom", "Kids Area", "Kitchenette", "Extra Bed"],
      description:
        "Spacious family-friendly suite with all essential amenities.",
    },
    {
      name: "Honeymoon Suite",
      image: "../images/romatic_suite.jpg",
      price: "$799/night",
      size: "70 sqm",
      features: [
        "Romantic Décor",
        "Private Terrace",
        "Champagne Service",
        "Rose Petals",
      ],
      description: "Romantic retreat designed for unforgettable moments.",
    },
  ];

  const hotelServices = [
    {
      icon: <Restaurant />,
      title: "Fine Dining",
      description:
        "Multiple restaurants offering international and local cuisine",
      features: [
        "Michelin-starred chef",
        "24/7 room service",
        "Private dining",
        "Wine cellar",
      ],
    },
    {
      icon: <Spa />,
      title: "Luxury Spa",
      description: "Full-service spa with rejuvenating treatments",
      features: [
        "Massage therapy",
        "Facial treatments",
        "Sauna & steam",
        "Wellness programs",
      ],
    },
    {
      icon: <Pool />,
      title: "Recreation",
      description: "World-class recreational facilities for all ages",
      features: ["Infinity pool", "Poolside bar", "Water sports", "Kids pool"],
    },
    {
      icon: <FitnessCenter />,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal training",
      features: [
        "24/7 access",
        "Personal trainers",
        "Group classes",
        "Modern equipment",
      ],
    },
    {
      icon: <BusinessCenter />,
      title: "Business Services",
      description: "Complete business facilities for corporate guests",
      features: [
        "Meeting rooms",
        "Conference facilities",
        "Business center",
        "Secretarial services",
      ],
    },
    {
      icon: <RoomService />,
      title: "Concierge",
      description: "24/7 concierge service for all your needs",
      features: [
        "Travel planning",
        "Event tickets",
        "Transportation",
        "Local recommendations",
      ],
    },
  ];

  const amenities = [
    { icon: <Wifi />, text: "Free High-Speed WiFi" },
    { icon: <LocalParking />, text: "Valet Parking" },
    { icon: <AirportShuttle />, text: "Airport Shuttle" },
    { icon: <LocalLaundryService />, text: "Laundry & Dry Cleaning" },
    { icon: <Pets />, text: "Pet-Friendly Rooms" },
    { icon: <RoomService />, text: "24/7 Room Service" },
  ];

  return (
    <Box sx={{ pt: { xs: 7, sm: 8 } }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            className="services-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "3rem", md: "4rem" },
              }}
            >
              Luxury Services &
              <Box
                component="span"
                sx={{ color: "secondary.main", display: "block" }}
              >
                Accommodations
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Discover our premium rooms and world-class services designed to
              make your stay extraordinary
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Room Types Section */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            Our Rooms & Suites
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Choose from our carefully designed accommodations, each offering
            unique experiences and premium amenities
          </Typography>
          <Grid container spacing={4} className="services-grid">
            {roomTypes.map((room, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <motion.div
                  className="service-card"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      "&:hover": {
                        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={room.image}
                      alt={room.name}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {room.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ color: "secondary.main", fontWeight: 700 }}
                        >
                          {room.price}
                        </Typography>
                      </Box>
                      <Chip
                        label={room.size}
                        sx={{
                          mb: 2,
                          bgcolor: "secondary.main",
                          color: "primary.main",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, color: "text.secondary" }}
                      >
                        {room.description}
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {room.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                      <Button
                        component={Link}
                        to="/reservations"
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: "secondary.main",
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "secondary.dark",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Hotel Services Section */}
      <Box sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            Hotel Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Comprehensive services designed to enhance every aspect of your stay
          </Typography>
          <Grid container spacing={4}>
            {hotelServices.map((service, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      minHeight: "500px",
                      border: "1px solid",
                      borderColor: "grey.200",
                      "&:hover": {
                        borderColor: "secondary.main",
                        boxShadow: "0 12px 48px rgba(201, 176, 55, 0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "secondary.main",
                        mb: 3,
                        "& svg": { fontSize: "3rem" },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary" }}
                    >
                      {service.description}
                    </Typography>
                    <List dense>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle
                              sx={{ color: "secondary.main", fontSize: "1rem" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            sx={{
                              "& .MuiTypography-root": { fontSize: "0.9rem" },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Amenities Section */}
      <Box sx={{ py: 10, bgcolor: "primary.main", color: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            Hotel Amenities
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              opacity: 0.9,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Complimentary amenities to make your stay more comfortable and
            convenient
          </Typography>
          <Grid container spacing={4}>
            {amenities.map((amenity, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        color: "secondary.main",
                        "& svg": { fontSize: "2rem" },
                      }}
                    >
                      {amenity.icon}
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {amenity.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper", textAlign: "center" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Ready to Experience Luxury?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
              Book your stay today and discover why Lincoln Hotels is the
              preferred choice for discerning travelers worldwide.
            </Typography>
            <Button
              component={Link}
              to="/reservations"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "secondary.main",
                color: "primary.main",
                px: 4,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "secondary.dark",
                },
              }}
            >
              Book Now
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
