import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'lg',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '400px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6a00', // Nike orange
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e55a00', // Darker shade for hover
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("https://via.placeholder.com/500")', // Replace with an athletic-themed image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '16px',
  height: '100%',
  minHeight: '400px',
}));

function Login() {
  return (
    <CustomContainer>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <FormContainer>
            <Typography variant="h4" component="h1" gutterBottom align="center" fontWeight="bold">
              Welcome Back
            </Typography>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ff6a00',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e55a00',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff6a00',
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ff6a00',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e55a00',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff6a00',
                  },
                },
              }}
            />
            <CustomButton variant="contained" fullWidth sx={{ mt: 2 }}>
              Login
            </CustomButton>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
              Don't have an account? <a href="/signup" style={{ color: '#ff6a00', textDecoration: 'underline' }}>Sign Up</a>
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
