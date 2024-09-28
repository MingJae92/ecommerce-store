import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import Testimonials from '../../../Testimonials/Testimonials';
import Hero from '../../../Hero/Hero';

function EmailForm() {
  return (
    <Box sx={{ width: '100%', py: 5 }}> {/* Full-width Box for the entire page */}
      <Hero />
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Box 
          sx={{ 
            backgroundColor: '#f5f5f5', 
            borderRadius: 2, 
            padding: 4, 
            textAlign: 'center' 
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
      </Container>
      <Box sx={{ width: '100%' }}> {/* Full-width Box for Testimonials */}
        <Testimonials />
      </Box>
    </Box>
  );
}

export default EmailForm;