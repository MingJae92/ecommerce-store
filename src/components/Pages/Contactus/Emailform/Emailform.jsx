import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import Hero from '../../../Hero/Hero';
import Testimonials from '../../../Testimonials/Testimonials';

function EmailForm() {
  return (
    <Container sx={{ padding: 0 }}>
      {/* Full-width Hero Section */}
      <Box sx={{ width: '100%' }}>
        <Hero />
      </Box>

      {/* Centered Email Form Section */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          padding: 4,
          textAlign: 'center',
          maxWidth: 600, // Set a maximum width for the caption box
          margin: '0 auto', // Center the box horizontally
          mt: 8, // Margin on top
        }}
      >
        <Typography variant="h4" gutterBottom>
          Stay in the Loop
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sign up for email updates on the latest products and promotions.
        </Typography>
        <TextField
          label="Enter your email address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Subscribe
        </Button>
      </Box>

      {/* Full-width Testimonials Section */}
      <Box sx={{ width: '100%', mt: 8 }}>
        <Testimonials />
      </Box>
    </Container>
  );
}

export default EmailForm;
