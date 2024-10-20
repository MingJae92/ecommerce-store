import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const CustomContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
}));

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: "400px",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff6a00", // Nike orange
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#e55a00", // Darker shade for hover
  },
  padding: theme.spacing(1.5),
  borderRadius: "8px",
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("https://via.placeholder.com/500")', // Replace with an athletic-themed image
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "16px",
  height: "100%",
  minHeight: "400px",
}));

function Login() {
  const [loggedIn, setLoggedIn] = useState(null);
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential);
    const userData = {
      picture: details.picture,
      name: details.name,
      email: details.email,
    };
    setLoggedIn(userData);
    console.log("Google login successful", details);
  };

  const handleError = () => {
    console.log("Login failed");
    // Show user-friendly error message if needed
  };

  const handleLoggedOut = () => {
    setLoggedIn(null); // Clear the logged-in user data
    navigate("/login"); // Redirect to the login page
    console.log("Logged out");
  };

  if (loggedIn) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: "16px",
            maxWidth: "400px",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <Avatar
            src={loggedIn.picture}
            alt={loggedIn.name}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
            }}
          />
          <Typography
            variant="h5"
            component="h3"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            {loggedIn.name}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
            {loggedIn.email}
          </Typography>
          <Typography variant="h6" sx={{ mt: 3, color: "#ff6a00" }}>
            Logged In Successfully
          </Typography>
          <CustomButton onClick={handleLoggedOut} sx={{ mt: 3 }}>
            Logout
          </CustomButton>
        </Paper>
      </Box>
    );
  }

  return (
    <CustomContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <FormContainer>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              fontWeight="bold"
            >
              Welcome Back
            </Typography>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ff6a00",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e55a00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff6a00",
                  },
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="current-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ff6a00",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e55a00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff6a00",
                  },
                },
              }}
            />
            <CustomButton variant="contained" fullWidth sx={{ mt: 3 }}>
              Login
            </CustomButton>
            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#ff6a00", textDecoration: "underline" }}
              >
                Sign Up
              </a>
            </Typography>
          </FormContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagePlaceholder />
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default Login;
