import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import Testimonials from '../Testimonials/Testimonials';
import Hero from '../Hero/Hero';

function OrderStatus() {
  return (
    <>
      {/* Full-width Hero Section */}
      <Hero />

      {/* Main Content: Order Tracking Form */}
      <Container sx={{ py: 4, maxWidth: '100%', px: 0 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Enter Your Order Information
          </Typography>
        </Box>
        <Container maxWidth="md" sx={{ px: 0 }}>
          <TextField
            label="Order Number"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
          >
            Track Order
          </Button>
        </Container>
      </Container>

      {/* Full-width Testimonials Section */}
      <Box sx={{ py: 4, width: '100%', backgroundColor: '#f5f5f5' }}>
        <Testimonials />
      </Box>
    </>
  );
}

export default OrderStatus;
