import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Rating,
} from "@mui/material";
import {
  Restaurant,
  Spa,
  Pool,
  FitnessCenter,
  RoomService,
  BusinessCenter,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-button",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

    // Parallax effect for hero background
    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Features animation
    gsap.fromTo(
      ".feature-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );

    // Rooms section animation
    gsap.fromTo(
      ".room-card",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: roomsRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const features = [
    {
      icon: <Restaurant />,
      title: "Fine Dining",
      description: "World-class restaurants with international cuisine",
    },
    {
      icon: <Spa />,
      title: "Luxury Spa",
      description: "Rejuvenating treatments and wellness services",
    },
    {
      icon: <Pool />,
      title: "Infinity Pool",
      description: "Rooftop pool with panoramic city views",
    },
    {
      icon: <FitnessCenter />,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal trainers",
    },
    {
      icon: <RoomService />,
      title: "24/7 Service",
      description: "Round-the-clock concierge and room service",
    },
    {
      icon: <BusinessCenter />,
      title: "Business Center",
      description: "Modern facilities for business travelers",
    },
  ];

  const rooms = [
    {
      id: 1,
      name: "Presidential Suite",
      image: "../images/presidential.png",
      price: "$999",
      description: "Luxurious suite with panoramic city views",
      rating: 5,
    },
    {
      id: 2,
      name: "Executive Room",
      image: "../images/executive-room.jpg",
      price: "$599",
      description: "Elegant room perfect for business travelers",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Deluxe King",
      image: "../images/DeluxeKingRoom.png",
      price: "$399",
      description: "Spacious room with modern amenities",
      rating: 4.6,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Exceptional service and  Attention to detail is remarkable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Travel Blogger",
      content:
        "Lincoln Hotels sets the standard for luxury hospitality. Absolutely stunning experience.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Event Planner",
      content:
        "Perfect venue for our corporate events. Professional staff and beautiful facilities.",
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          height: { xs: "80vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        }}
      >
        <Box
          className="hero-bg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "170%",
            backgroundImage: "url(../images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: 0,
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ maxWidth: 800, color: "white" }}>
            <Typography
              variant="h1"
              className="hero-title"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                lineHeight: 1.1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Experience
              <Box
                component="span"
                sx={{ color: "secondary.main", display: "block" }}
              >
                Luxury Redefined
              </Box>
            </Typography>
            <Typography
              variant="h5"
              className="hero-subtitle"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 300,
                lineHeight: 1.6,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, md: 0 },
              }}
            >
              Immerse yourself in unparalleled comfort and elegance at Lincoln
              Hotels. Where every moment becomes a cherished memory.
            </Typography>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.div
                className="hero-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to="/reservations"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "primary.main",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "secondary.light",
                    },
                  }}
                >
                  Book Your Stay
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        ref={featuresRef}
        sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            World-Class Amenities
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Discover our exceptional facilities designed to make your stay
            unforgettable
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  className="feature-card"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      textAlign: "center",
                      height: "100%",
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
                        "& svg": { fontSize: { xs: "2.5rem", md: "3rem" } },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Rooms Section */}
      <Box ref={roomsRef} sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Luxury Accommodations
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Choose from our carefully curated selection of premium rooms and
            suites
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {rooms.map((room) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={room.id}>
                <motion.div
                  className="room-card"
                  whileHover={{ scale: 1.02 }}
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
                      height="240"
                      image={room.image}
                      alt={room.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                          flexDirection: { xs: "column", sm: "row" },
                          gap: { xs: 1, sm: 0 },
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                          }}
                        >
                          {room.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "secondary.main",
                            fontWeight: 700,
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                          }}
                        >
                          {room.price}
                        </Typography>
                      </Box>
                      <Rating
                        value={room.rating}
                        readOnly
                        sx={{ mb: 2 }}
                        size="small"
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {room.description}
                      </Typography>
                      <Button
                        component={Link}
                        to="/reservations"
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: "secondary.main",
                          color: "secondary.main",
                          py: { xs: 1, md: 1.5 },
                          "&:hover": {
                            bgcolor: "secondary.main",
                            color: "primary.main",
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

      {/* Testimonials Section */}
      <Box
        sx={{ py: { xs: 6, md: 10 }, bgcolor: "primary.main", color: "white" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: { xs: 6, md: 8 },
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            What Our Guests Say
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      p: { xs: 3, md: 4 },
                      bgcolor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      height: "100%",
                    }}
                  >
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                      size="small"
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: "italic",
                        color: "white",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "gray",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "secondary.main",
                        fontSize: { xs: "0.8rem", md: "0.875rem" },
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
