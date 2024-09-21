import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        justifyContent="space-between" 
        sx={{ height: '60vh', p: 2 }}
      >
        <Box flex={1} sx={{ p: 2 }}>
          <Typography variant="h2" gutterBottom>
            Discover Amazing Products
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            Find the best deals on the latest trends in fashion, electronics, and more!
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Shop Now
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
        <Box flex={1} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://via.placeholder.com/500x400" // Replace with your product image
            alt="Featured Product"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
