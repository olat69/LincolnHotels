import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Alert,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface BookingForm {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  roomType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const Reservations: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    checkIn: null,
    checkOut: null,
    guests: 1,
    roomType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const steps = ["Select Dates & Room", "Guest Information", "Confirmation"];

  const roomTypes = [
    {
      id: "presidential",
      name: "Presidential Suite",
      price: 999,
      image: "../images/presidential.png",
      features: ["Ocean View", "Private Balcony", "Butler Service", "Jacuzzi"],
      description: "Ultimate luxury with panoramic views",
      size: "120 sqm",
    },
    {
      id: "executive",
      name: "Executive Suite",
      price: 699,
      image: "../images/executive-room.jpg",
      features: ["City View", "Living Area", "Work Desk", "Mini Bar"],
      description: "Perfect for business travelers",
      size: "80 sqm",
    },
    {
      id: "deluxe",
      name: "Deluxe King Room",
      price: 399,
      image: "../images/DeluxeKingRoom.png",
      features: ["King Bed", "City View", "Modern Bathroom", "Smart TV"],
      description: "Elegant comfort with modern amenities",
      size: "45 sqm",
    },
    {
      id: "superior",
      name: "Superior Twin Room",
      price: 349,
      image: "../images/SuperiorTwinRoom.jpg",
      features: ["Twin Beds", "Garden View", "Work Area", "Rain Shower"],
      description: "Comfortable accommodation",
      size: "40 sqm",
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (field: keyof BookingForm, value: any) => {
    setBookingForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getSelectedRoom = () => {
    return roomTypes.find((room) => room.id === bookingForm.roomType);
  };

  const calculateNights = () => {
    if (bookingForm.checkIn && bookingForm.checkOut) {
      const diffTime = Math.abs(
        bookingForm.checkOut.getTime() - bookingForm.checkIn.getTime()
      );
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const room = getSelectedRoom();
    const nights = calculateNights();
    if (room && nights > 0) {
      const subtotal = room.price * nights;
      const tax = subtotal * 0.15; // 15% tax
      return { subtotal, tax, total: subtotal + tax };
    }
    return { subtotal: 0, tax: 0, total: 0 };
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
              Select Your Dates & Room
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-in Date"
                    value={bookingForm.checkIn}
                    onChange={(date) => handleInputChange("checkIn", date)}
                    sx={{ width: "100%", mb: 3 }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Check-out Date"
                    value={bookingForm.checkOut}
                    onChange={(date) => handleInputChange("checkOut", date)}
                    sx={{ width: "100%", mb: 3 }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth>
                  <InputLabel>Number of Guests</InputLabel>
                  <Select
                    value={bookingForm.guests}
                    onChange={(e) =>
                      handleInputChange("guests", e.target.value)
                    }
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 4, mb: 3, fontWeight: 600 }}>
              Choose Your Room
            </Typography>
            <Grid container spacing={3}>
              {roomTypes.map((room) => (
                <Grid size={{ xs: 12, md: 6 }} key={room.id}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      sx={{
                        cursor: "pointer",
                        border: bookingForm.roomType === room.id ? 2 : 1,
                        borderColor:
                          bookingForm.roomType === room.id
                            ? "secondary.main"
                            : "grey.300",
                        "&:hover": {
                          borderColor: "secondary.main",
                        },
                      }}
                      onClick={() => handleInputChange("roomType", room.id)}
                    >
                      <CardMedia
                        component="img"
                        height="160"
                        image={room.image}
                        alt={room.name}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 2,
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {room.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ color: "secondary.main", fontWeight: 700 }}
                          >
                            ${room.price}/night
                          </Typography>
                        </Box>
                        <Chip label={room.size} sx={{ mb: 2 }} />
                        <Typography
                          variant="body2"
                          sx={{ mb: 2, color: "text.secondary" }}
                        >
                          {room.description}
                        </Typography>
                        <Box>
                          {room.features.slice(0, 2).map((feature, idx) => (
                            <Chip
                              key={idx}
                              label={feature}
                              variant="outlined"
                              size="small"
                              sx={{ mr: 1, mb: 1 }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
              Guest Information
            </Typography>
            <Grid container spacing={3}>
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
                  rows={4}
                  value={bookingForm.specialRequests}
                  onChange={(e) =>
                    handleInputChange("specialRequests", e.target.value)
                  }
                  placeholder="Any special requests or preferences..."
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        const room = getSelectedRoom();
        const nights = calculateNights();
        const { subtotal, tax, total } = calculateTotal();

        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
              Booking Confirmation
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Paper
                  elevation={0}
                  sx={{ p: 3, border: "1px solid", borderColor: "grey.300" }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Booking Details
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Guest Name"
                        secondary={`${bookingForm.firstName} ${bookingForm.lastName}`}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Email"
                        secondary={bookingForm.email}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Phone"
                        secondary={bookingForm.phone}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Check-in"
                        secondary={
                          bookingForm.checkIn
                            ? format(bookingForm.checkIn, "PPP")
                            : ""
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Check-out"
                        secondary={
                          bookingForm.checkOut
                            ? format(bookingForm.checkOut, "PPP")
                            : ""
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Room Type"
                        secondary={room?.name}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Number of Guests"
                        secondary={bookingForm.guests}
                      />
                    </ListItem>
                    {bookingForm.specialRequests && (
                      <ListItem>
                        <ListItemText
                          primary="Special Requests"
                          secondary={bookingForm.specialRequests}
                        />
                      </ListItem>
                    )}
                  </List>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "secondary.main",
                    bgcolor: "secondary.light",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Price Summary
                  </Typography>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary={`${room?.name} × ${nights} night${
                          nights > 1 ? "s" : ""
                        }`}
                        secondary={`$${room?.price} per night`}
                      />
                      <Typography variant="body1">${subtotal}</Typography>
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText primary="Taxes & Fees" />
                      <Typography variant="body1">${tax.toFixed(2)}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            Total
                          </Typography>
                        }
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "secondary.main" }}
                      >
                        ${total.toFixed(2)}
                      </Typography>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 0:
        return (
          bookingForm.checkIn && bookingForm.checkOut && bookingForm.roomType
        );
      case 1:
        return (
          bookingForm.firstName &&
          bookingForm.lastName &&
          bookingForm.email &&
          bookingForm.phone
        );
      case 2:
        return true;
      default:
        return false;
    }
  };

  return (
    <Box sx={{ pt: { xs: 7, sm: 8 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "3rem", md: "4rem" },
            }}
          >
            Make a
            <Box
              component="span"
              sx={{ color: "secondary.main", display: "block" }}
            >
              Reservation
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
            Book your luxury stay at Lincoln Hotels with our simple and secure
            reservation system
          </Typography>
        </Container>
      </Box>

      {/* Booking Form */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ p: 4 }}>
            <Stepper
              activeStep={activeStep}
              sx={{
                mb: 4,
                "& .MuiStepLabel-label": {
                  display: { xs: "none", sm: "block" },
                },
                "& .MuiStepIcon-root": {
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {renderStepContent(activeStep)}

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                size="large"
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={
                  activeStep === steps.length - 1
                    ? () => {
                        alert(
                          "Booking confirmed! You will receive a confirmation email shortly."
                        );
                      }
                    : handleNext
                }
                disabled={!isStepValid(activeStep)}
                size="large"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Confirm Booking" : "Next"}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Help Section */}
      <Box sx={{ py: 6, bgcolor: "grey.50" }}>
        <Container maxWidth="md">
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body1">
              Need assistance with your booking? Our concierge team is available
              24/7 to help you at <strong>+1 (555) 123-4567</strong> or{" "}
              <strong>reservations@lincolnhotels.com</strong>
            </Typography>
          </Alert>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            All rates are subject to availability and may change without notice.
            Cancellation policies apply. Please review our terms and conditions
            before booking.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Reservations;
