import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
} from "@mui/material";
import {
  Star,
  Schedule,
  Security,
  LocationOn,
  CheckCircle,
} from "@mui/icons-material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { motion } from "framer-motion";

interface BookingForm {
  pickupDate: Date | null;
  pickupTime: Date | null;
  pickupLocation: string;
  destination: string;
  serviceType: string;
  duration: string;
  passengers: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const Chauffeur: React.FC = () => {
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    pickupDate: null,
    pickupTime: null,
    pickupLocation: "",
    destination: "",
    serviceType: "",
    duration: "",
    passengers: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const vehicleTypes = [
    {
      id: "luxury-sedan",
      name: "Luxury Sedan",
      image: "../images/sedan.jpg",
      capacity: "1-3 passengers",
      price: 120,
      features: [
        "Mercedes S-Class",
        "Premium Leather",
        "Climate Control",
        "WiFi",
      ],
      description: "Perfect for business meetings and airport transfers",
    },
    {
      id: "suv",
      name: "Premium SUV",
      image: "../images/suv.jpg",
      capacity: "1-6 passengers",
      price: 180,
      features: [
        "BMW X7",
        "Spacious Interior",
        "Entertainment System",
        "Privacy Glass",
      ],
      description: "Ideal for families and group transportation",
    },
    {
      id: "limousine",
      name: "Stretch Limousine",
      image: "../images/limo.jpg",
      capacity: "1-8 passengers",
      price: 350,
      features: [
        "Luxury Interior",
        "Mini Bar",
        "Mood Lighting",
        "Sound System",
      ],
      description: "Ultimate luxury for special occasions",
    },
    {
      id: "executive-van",
      name: "Executive Van",
      image: "../images/van.jpg",
      capacity: "1-14 passengers",
      price: 250,
      features: [
        "Mercedes Sprinter",
        "Conference Seating",
        "WiFi",
        "Power Outlets",
      ],
      description: "Perfect for corporate events and group transfers",
    },
  ];

  const durations = [
    { value: "2", label: "2 Hours" },
    { value: "4", label: "4 Hours" },
    { value: "6", label: "6 Hours" },
    { value: "8", label: "8 Hours" },
    { value: "full-day", label: "Full Day (12 Hours)" },
  ];

  const handleInputChange = (field: keyof BookingForm, value: any) => {
    setBookingForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getSelectedVehicle = () => {
    return vehicleTypes.find(
      (vehicle) => vehicle.id === bookingForm.serviceType
    );
  };

  const calculatePrice = () => {
    const vehicle = getSelectedVehicle();
    if (!vehicle) return 0;

    let multiplier = 1;
    if (bookingForm.duration === "full-day") {
      multiplier = 12;
    } else if (bookingForm.duration) {
      multiplier = parseInt(bookingForm.duration);
    }

    return vehicle.price * multiplier;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Chauffeur service booking request submitted! Our team will contact you shortly."
    );
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
          position: "relative",
          overflow: "hidden",
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
              Premium
              <Box
                component="span"
                sx={{ color: "secondary.main", display: "block" }}
              >
                Chauffeur Service
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
              Experience luxury transportation with our professional chauffeur
              services. Travel in style and comfort with our premium fleet.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
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
            Why Choose Our Service
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Security />,
                title: "Professional Drivers",
                description:
                  "Licensed, insured, and background-checked chauffeurs",
              },
              {
                icon: <Star />,
                title: "Luxury Fleet",
                description:
                  "Premium vehicles maintained to the highest standards",
              },
              {
                icon: <Schedule />,
                title: "24/7 Service",
                description: "Available round the clock for your convenience",
              },
              {
                icon: <LocationOn />,
                title: "GPS Tracking",
                description: "Real-time tracking and route optimization",
              },
            ].map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
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
                    <Box
                      sx={{
                        color: "secondary.main",
                        mb: 2,
                        "& svg": { fontSize: "3rem" },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
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

      {/* Vehicle Fleet Section */}
      <Box sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            Our Premium Fleet
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Choose from our collection of luxury vehicles designed for every
            occasion
          </Typography>
          <Grid container spacing={4}>
            {vehicleTypes.map((vehicle, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }} key={vehicle.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      minHeight: "600px",
                      "&:hover": {
                        boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={vehicle.image}
                      alt={vehicle.name}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {vehicle.name}
                      </Typography>
                      <Chip
                        label={vehicle.capacity}
                        sx={{
                          mb: 2,
                          bgcolor: "secondary.main",
                          color: "primary.main",
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, color: "secondary.main", fontWeight: 700 }}
                      >
                        ${vehicle.price}/hour
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 3, color: "text.secondary" }}
                      >
                        {vehicle.description}
                      </Typography>
                      <List dense>
                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <CheckCircle
                                sx={{
                                  color: "secondary.main",
                                  fontSize: "1rem",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "0.875rem",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Booking Form Section */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            Book Your Chauffeur
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
            }}
          >
            Fill out the form below to request your premium transportation
            service
          </Typography>

          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Service Details */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Service Details
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Pickup Date"
                      value={bookingForm.pickupDate}
                      onChange={(date) => handleInputChange("pickupDate", date)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Pickup Time"
                      value={bookingForm.pickupTime}
                      onChange={(time) => handleInputChange("pickupTime", time)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Pickup Location"
                    value={bookingForm.pickupLocation}
                    onChange={(e) =>
                      handleInputChange("pickupLocation", e.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Destination"
                    value={bookingForm.destination}
                    onChange={(e) =>
                      handleInputChange("destination", e.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Service Type</InputLabel>
                    <Select
                      value={bookingForm.serviceType}
                      onChange={(e) =>
                        handleInputChange("serviceType", e.target.value)
                      }
                      required
                    >
                      {vehicleTypes.map((vehicle) => (
                        <MenuItem key={vehicle.id} value={vehicle.id}>
                          {vehicle.name} - ${vehicle.price}/hour
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Duration</InputLabel>
                    <Select
                      value={bookingForm.duration}
                      onChange={(e) =>
                        handleInputChange("duration", e.target.value)
                      }
                    >
                      {durations.map((duration) => (
                        <MenuItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Personal Information */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, mt: 2, fontWeight: 600 }}
                  >
                    Personal Information
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={bookingForm.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={bookingForm.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={bookingForm.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Special Requests"
                    multiline
                    rows={3}
                    value={bookingForm.specialRequests}
                    onChange={(e) =>
                      handleInputChange("specialRequests", e.target.value)
                    }
                    placeholder="Any special requests or preferences..."
                  />
                </Grid>

                {/* Price Summary */}
                {getSelectedVehicle() && bookingForm.duration && (
                  <Grid size={{ xs: 12 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: "secondary.light",
                        border: "1px solid",
                        borderColor: "secondary.main",
                      }}
                    >
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Estimated Cost
                      </Typography>
                      <Typography variant="body1">
                        {getSelectedVehicle()?.name} - {bookingForm.duration}{" "}
                        hours
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ color: "secondary.main", fontWeight: 700, mt: 1 }}
                      >
                        ${calculatePrice()}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mt: 1 }}
                      >
                        *Final price may vary based on distance and additional
                        services
                      </Typography>
                    </Paper>
                  </Grid>
                )}

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
                    Request Booking
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>

          <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
              Your booking request will be confirmed within 30 minutes. For
              immediate assistance, please call our 24/7 concierge at{" "}
              <strong>+1 (555) 123-4567</strong>
            </Typography>
          </Alert>
        </Container>
      </Box>
    </Box>
  );
};

export default Chauffeur;
