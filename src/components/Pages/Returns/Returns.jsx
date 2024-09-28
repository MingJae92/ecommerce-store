import React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import Hero from '../../Hero/Hero';
import Testimonials from '../../Testimonials/Testimonials';

function Returns() {
  return (
    <Box sx={{ width: '100%', marginTop: 4, paddingX: 2 }}>
      {/* Header Section */}
      <Hero />

      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Returns & Exchanges
      </Typography>

      {/* Return Policy */}
      <Box mb={3} textAlign="center">
        <Typography variant="body1">
          If you're not completely satisfied with your purchase, you can return it within 30 days.
          Products must be unworn and unwashed. Start your return below.
        </Typography>
      </Box>

      {/* Return Form */}
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {/* Order Number */}
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            variant="outlined"
            label="Order Number"
            placeholder="Enter your order number"
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            placeholder="Enter your email"
          />
        </Grid>

        {/* Return Reason */}
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="outlined"
            label="Reason for Return"
            placeholder="Why are you returning this item?"
            multiline
            rows={4}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} md={10} mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ backgroundColor: '#111', padding: '12px 0' }}
          >
            Start Return
          </Button>
        </Grid>
      </Grid>

      <Testimonials />
    </Box>
  );
}

export default Returns;
