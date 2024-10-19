import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

function Signup() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(newUser);
    // Perform form submission or validation here
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      setErrors(newErrors);
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 6) {
      errors.name = "Name must be at least 6 characters long";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (data.confirmpassword !== data.password) {
      errors.confirmpassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={4}
            borderRadius={2}
            sx={{
              backgroundColor: "#fff",
              boxShadow: 3,
              height: "100%",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#111", mb: 2 }}
            >
              Join the Movement
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ mb: 4, textAlign: "center" }}
            >
              Sign up for exclusive offers and the latest news!
            </Typography>

            <TextField
              value={newUser.name}
              name="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#111" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
              }}
            />
            <TextField
              value={newUser.email}
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#111" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
              }}
            />
            <TextField
              value={newUser.password}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#111" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
              }}
            />
            <TextField
              value={newUser.confirmpassword}
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.confirmpassword}
              helperText={errors.confirmpassword}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#111" },
                  "&:hover fieldset": { borderColor: "#000" },
                  "&.Mui-focused fieldset": { borderColor: "#000" },
                },
              }}
            />

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: "#111",
                "&:hover": { bgcolor: "#000" },
                borderRadius: 20,
              }}
            >
              Sign Up
            </Button>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: 3, textAlign: "center" }}
            >
              Already have an account?{" "}
              <Typography
                component="a"
                href="#"
                sx={{ color: "#111", textDecoration: "none" }}
              >
                <Link to="/login">Log in</Link>
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://via.placeholder.com/400"
            alt="Signup"
            sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;
