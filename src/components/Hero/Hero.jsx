import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, backgroundColor: '#f9f9f9', p: 2 }}>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        justifyContent="space-between" 
        sx={{ height: { xs: 'auto', md: '80vh' }, p: 2 }}
      >
        <Box flex={1} sx={{ p: 2 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3.5rem' } }} gutterBottom>
            Elevate Your Game
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Discover the latest performance gear and stay ahead of the competition.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
            Shop Now
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
        <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 'auto', md: '100%' }, mt: { xs: 4, md: 0 } }}>
          <img
            src="https://via.placeholder.com/500x400" // Replace with your product image
            alt="Featured Product"
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '500px', 
              objectFit: 'cover', 
              borderRadius: '8px' 
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
