import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Link as MuiLink,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
  CheckCircle,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (
    field: keyof SignupForm,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors([]);
  };

  const validateForm = (): string[] => {
    const newErrors: string[] = [];

    if (!formData.firstName.trim()) newErrors.push("First name is required");
    if (!formData.lastName.trim()) newErrors.push("Last name is required");
    if (!formData.email.trim()) newErrors.push("Email is required");
    if (!formData.phone.trim()) newErrors.push("Phone number is required");
    if (!formData.password) newErrors.push("Password is required");
    if (formData.password.length < 8)
      newErrors.push("Password must be at least 8 characters");
    if (formData.password !== formData.confirmPassword)
      newErrors.push("Passwords do not match");
    if (!formData.agreeToTerms)
      newErrors.push("You must agree to the terms and conditions");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.push("Please enter a valid email address");
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate signup process
    console.log("Signup data:", formData);
    alert("Account created successfully! Welcome to Lincoln Hotels.");
    navigate("/login");
  };

  const handleSocialSignup = (provider: string) => {
    // Simulate social signup
    console.log(`Sign up with ${provider}`);
    navigate("/");
  };

  const benefits = [
    "Exclusive member rates and discounts",
    "Priority reservations and upgrades",
    "Personalized service preferences",
    "Loyalty points and rewards",
    "Early access to special offers",
    "Complimentary amenities",
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Benefits Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ color: "white", p: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Join Lincoln
                  <Box
                    component="span"
                    sx={{ color: "secondary.main", display: "block" }}
                  >
                    Rewards
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
                >
                  Create your account and unlock exclusive benefits,
                  personalized experiences, and VIP treatment at Lincoln Hotels
                  worldwide.
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Member Benefits:
                  </Typography>
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <CheckCircle sx={{ color: "secondary.main", mr: 2 }} />
                        <Typography variant="body1">{benefit}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Signup Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={24}
                sx={{
                  p: 6,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: "primary.main",
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    Create Account
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    Join our exclusive community of luxury travelers
                  </Typography>
                </Box>

                {/* Error Alert */}
                {errors.length > 0 && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    <ul style={{ margin: 0, paddingLeft: "20px" }}>
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </Alert>
                )}

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
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
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        helperText="Password must be at least 8 characters"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                edge="end"
                              >
                                {showConfirmPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 3 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.agreeToTerms}
                          onChange={(e) =>
                            handleInputChange("agreeToTerms", e.target.checked)
                          }
                          sx={{ color: "secondary.main" }}
                          required
                        />
                      }
                      label={
                        <Typography variant="body2">
                          I agree to the{" "}
                          <MuiLink href="#" sx={{ color: "secondary.main" }}>
                            Terms & Conditions
                          </MuiLink>{" "}
                          and{" "}
                          <MuiLink href="#" sx={{ color: "secondary.main" }}>
                            Privacy Policy
                          </MuiLink>
                        </Typography>
                      }
                    />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.subscribeNewsletter}
                          onChange={(e) =>
                            handleInputChange(
                              "subscribeNewsletter",
                              e.target.checked
                            )
                          }
                          sx={{ color: "secondary.main" }}
                        />
                      }
                      label={
                        <Typography variant="body2">
                          Subscribe to our newsletter for exclusive offers and
                          updates
                        </Typography>
                      }
                    />
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "secondary.main",
                      color: "primary.main",
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 3,
                      "&:hover": {
                        bgcolor: "secondary.dark",
                      },
                    }}
                  >
                    Create Account
                  </Button>
                </form>

                {/* Social Signup */}
                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Or sign up with
                  </Typography>
                </Divider>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Google />}
                    onClick={() => handleSocialSignup("Google")}
                    sx={{
                      py: 1.5,
                      borderColor: "grey.300",
                      color: "text.primary",
                      "&:hover": {
                        borderColor: "secondary.main",
                        bgcolor: "secondary.light",
                      },
                    }}
                  >
                    Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Facebook />}
                    onClick={() => handleSocialSignup("Facebook")}
                    sx={{
                      py: 1.5,
                      borderColor: "grey.300",
                      color: "text.primary",
                      "&:hover": {
                        borderColor: "secondary.main",
                        bgcolor: "secondary.light",
                      },
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Apple />}
                    onClick={() => handleSocialSignup("Apple")}
                    sx={{
                      py: 1.5,
                      borderColor: "grey.300",
                      color: "text.primary",
                      "&:hover": {
                        borderColor: "secondary.main",
                        bgcolor: "secondary.light",
                      },
                    }}
                  >
                    Apple
                  </Button>
                </Box>

                {/* Login Link */}
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Already have an account?{" "}
                    <MuiLink
                      component={Link}
                      to="/login"
                      sx={{
                        color: "secondary.main",
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Sign in here
                    </MuiLink>
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Signup;
