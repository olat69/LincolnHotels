import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      ".about-hero-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Stats counter animation
    gsap.fromTo(
      ".stat-number",
      { innerText: 0 },
      {
        innerText: (_: number, target: Element) =>
          target.getAttribute("data-value"),
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const stats = [
    { label: "Years of Excellence", value: 25 },
    { label: "Luxury Rooms", value: 350 },
    { label: "Happy Guests", value: 50000 },
    { label: "Awards Won", value: 15 },
  ];

  const timeline = [
    {
      year: "1999",
      title: "Foundation",
      description:
        "Lincoln Hotels was founded with a vision to redefine luxury hospitality.",
    },
    {
      year: "2005",
      title: "First Expansion",
      description:
        "Opened our second location, establishing our reputation for excellence.",
    },
    {
      year: "2012",
      title: "International Recognition",
      description: "Received our first international luxury hospitality award.",
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description:
        "Launched cutting-edge digital services and smart room technology.",
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description:
        "Committed to carbon-neutral operations and sustainable luxury.",
    },
  ];

  const team = [
    {
      name: "James Lincoln",
      role: "Founder & CEO",
      image: "../images/ceo.jpg",
      bio: "Visionary leader with 30+ years in luxury hospitality.",
    },
    {
      name: "Sarah Mitchell",
      role: "General Manager",
      image: "../images/general_manger.jpg",
      bio: "Expert in operations with a passion for guest excellence.",
    },
    {
      name: "David Chen",
      role: "Head Chef",
      image: "../images/chef.jpg",
      bio: "Michelin-starred chef bringing culinary artistry to our restaurants.",
    },
  ];

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            className="about-hero-content"
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
                textAlign: "center",
              }}
            >
              Our Story of
              <Box
                component="span"
                sx={{ color: "secondary.main", display: "block" }}
              >
                Excellence
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              For over two decades, Lincoln Hotels has been synonymous with
              luxury, comfort, and exceptional hospitality. Our journey is one
              of continuous innovation and unwavering commitment to our guests.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box ref={statsRef} sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      border: "1px solid",
                      borderColor: "grey.200",
                      "&:hover": {
                        borderColor: "secondary.main",
                        transform: "translateY(-4px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      className="stat-number"
                      data-value={stat.value}
                      sx={{
                        fontWeight: 700,
                        color: "secondary.main",
                        mb: 1,
                      }}
                    >
                      0
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  To create extraordinary experiences that exceed expectations
                  through personalized service, attention to detail, and a
                  commitment to excellence in every aspect of hospitality.
                </Typography>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                >
                  To be the world's most admired luxury hotel brand, setting new
                  standards for hospitality while maintaining our commitment to
                  sustainability and community engagement.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="../images/about-page.jpg"
                  alt="Hotel lobby"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 4,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: 10, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 8,
              fontWeight: 700,
            }}
          >
            Our Journey
          </Typography>
          <Timeline position="alternate">
            {timeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <TimelineDot
                      sx={{
                        bgcolor: "secondary.main",
                        width: 20,
                        height: 20,
                      }}
                    />
                  </motion.div>
                  {index < timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "secondary.main", fontWeight: 600, mb: 1 }}
                      >
                        {item.year}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Team Section */}
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
            Leadership Team
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
            Meet the visionaries behind Lincoln Hotels' success
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      border: "1px solid",
                      borderColor: "grey.200",
                      "&:hover": {
                        borderColor: "secondary.main",
                        boxShadow: "0 12px 48px rgba(201, 176, 55, 0.15)",
                      },
                    }}
                  >
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 3,
                        border: "4px solid",
                        borderColor: "secondary.main",
                      }}
                    />
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "secondary.main", fontWeight: 500 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {member.bio}
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

export default About;
