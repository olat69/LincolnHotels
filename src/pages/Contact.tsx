import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Business,
  Restaurant,
  Spa,
  DirectionsCar,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Reservations)"],
      subtitle: "24/7 Concierge Service",
    },
    {
      icon: <Email />,
      title: "Email",
      details: ["info@lincolnhotels.com", "reservations@lincolnhotels.com"],
      subtitle: "Response within 2 hours",
    },
    {
      icon: <LocationOn />,
      title: "Address",
      details: ["123 Luxury Avenue", "Downtown District, New York, NY 10001"],
      subtitle: "Premium location in the city center",
    },
    {
      icon: <AccessTime />,
      title: "Business Hours",
      details: ["Front Desk: 24/7", "Management: 9 AM - 6 PM"],
      subtitle: "Always here to serve you",
    },
  ];

  const departments = [
    { value: "general", label: "General Inquiry", icon: <Business /> },
    { value: "reservations", label: "Reservations", icon: <LocationOn /> },
    { value: "dining", label: "Dining & Events", icon: <Restaurant /> },
    { value: "spa", label: "Spa & Wellness", icon: <Spa /> },
    { value: "chauffeur", label: "Chauffeur Service", icon: <DirectionsCar /> },
    { value: "feedback", label: "Feedback & Complaints", icon: <Email /> },
  ];

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      department: "",
      message: "",
    });
  };

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
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
              Get in
              <Box
                component="span"
                sx={{ color: "secondary.main", display: "block" }}
              >
                Touch
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              We're here to assist you with any questions or special requests.
              Our dedicated team is available 24/7 to ensure your experience is
              perfect.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}
          >
            Contact Information
          </Typography>
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      minHeight: "300px",
                      p: 3,
                      textAlign: "center",
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
                      {info.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        sx={{ mb: 1, color: "text.primary" }}
                      >
                        {detail}
                      </Typography>
                    ))}
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 2 }}
                    >
                      {info.subtitle}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form and Map Section */}
      <Box sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                  Send us a Message
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, color: "text.secondary" }}
                >
                  Fill out the form below and our team will get back to you
                  within 2 hours during business hours, or first thing the next
                  morning.
                </Typography>

                <Paper elevation={3} sx={{ p: 4 }}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel>Department</InputLabel>
                          <Select
                            value={formData.department}
                            onChange={(e) =>
                              handleInputChange("department", e.target.value)
                            }
                            required
                          >
                            {departments.map((dept) => (
                              <MenuItem key={dept.value} value={dept.value}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  {dept.icon}
                                  {dept.label}
                                </Box>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Please describe your inquiry or request in detail..."
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          sx={{
                            bgcolor: "secondary.main",
                            color: "primary.main",
                            py: 2,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            "&:hover": {
                              bgcolor: "secondary.dark",
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            {/* Map and Additional Info */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                  Find Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, color: "text.secondary" }}
                >
                  Located in the heart of downtown, Lincoln Hotels offers easy
                  access to the city's finest attractions, shopping, and
                  business districts.
                </Typography>

                {/* Map Placeholder */}
                <Paper
                  elevation={3}
                  sx={{
                    height: 300,
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "grey.100",
                    backgroundImage: "url(../images/map.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(0,0,0,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      Interactive Map
                    </Typography>
                  </Box>
                </Paper>

                {/* Quick Contact Cards */}
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        "&:hover": {
                          bgcolor: "secondary.main",
                        },
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        Emergency Contact
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "secondary.light", fontWeight: 600 }}
                      >
                        +1 (555) 911-HELP
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        24/7 Emergency Line
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        "&:hover": {
                          bgcolor: "secondary.main",
                        },
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        VIP Services
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "secondary.light", fontWeight: 600 }}
                      >
                        +1 (555) VIP-CARE
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Exclusive Guest Services
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                question: "What are your check-in and check-out times?",
                answer:
                  "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.",
              },
              {
                question: "Do you offer airport transportation?",
                answer:
                  "Yes, we provide complimentary airport shuttle service and premium chauffeur services. Please contact our concierge to arrange.",
              },
              {
                question: "What dining options are available?",
                answer:
                  "We feature three restaurants: fine dining, casual bistro, and rooftop bar. Room service is available 24/7.",
              },
              {
                question: "Do you have meeting facilities?",
                answer:
                  "Yes, we offer state-of-the-art meeting rooms and conference facilities with full audio-visual equipment and catering services.",
              },
            ].map((faq, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: "1px solid",
                      borderColor: "grey.200",
                      "&:hover": {
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {faq.answer}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for your message! We'll get back to you within 2 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
