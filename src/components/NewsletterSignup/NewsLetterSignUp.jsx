import React from 'react';
import { Container, Box, Typography, Button, TextField } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4, backgroundColor: '#f9f9f9', p: 4 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ textAlign: 'center', height: '40vh' }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Stay in the Know
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Get updates on the latest products, special offers, and more.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{ width: '100%', maxWidth: '600px', alignItems: 'center' }}
        >
          <TextField 
            label="Enter your email" 
            variant="outlined" 
            fullWidth 
            sx={{ mb: { xs: 2, md: 0 }, mr: { md: 2 } }} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ width: { xs: '100%', md: 'auto' } }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewsletterSignup;
