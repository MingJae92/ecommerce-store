import React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Store
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Find the best products at unbeatable prices!
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            Shop Now
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://via.placeholder.com/500"
            alt="Featured Product"
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
