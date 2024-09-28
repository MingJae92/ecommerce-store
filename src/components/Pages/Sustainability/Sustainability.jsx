import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Hero from '../../Hero/Hero';
import Testimonials from '../../Testimonials/Testimonials';

const Sustainability = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: '#f4f4f4', p: 2 }}>
      <Hero/>
      <Typography variant="h2" align="center" gutterBottom>
        Sustainability
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Our commitment to sustainability is at the core of what we do. We strive to minimize our environmental impact and support our communities.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: 'url(https://via.placeholder.com/1200x300?text=Eco-Friendly+Materials)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              color: 'white',
              padding: '20px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              mb: 4, // Margin below the first image
            }}
          >
            <Typography variant="h5">Eco-Friendly Materials</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: 'url(https://via.placeholder.com/1200x300?text=Community+Initiatives)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              color: 'white',
              padding: '20px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              mb: 4, // Margin below the second image
            }}
          >
            <Typography variant="h5">Community Initiatives</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button variant="contained" color="primary" href="/shop" sx={{ padding: '10px 20px' }}>
          Explore Our Products
        </Button>
      </Box>
      <Testimonials/>
    </Container>
  );
};

export default Sustainability;
