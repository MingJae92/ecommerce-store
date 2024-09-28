import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import Testimonials from '../../Testimonials/Testimonials';
import Hero from '../../Hero/Hero';

function Shipping() {
  return (
    <Box sx={{ width: '100%', py: 5 }}> {/* Full-width Box instead of Container */}
      <Hero />

      <Typography variant="h4" gutterBottom align="center">
        Shipping & Delivery
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Get free standard shipping on orders over $50. Explore our shipping options and pricing below.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Shipping Options Section */}
      <Box sx={{ mb: 5, px: 3 }}> {/* Added padding for better spacing */}
        <Typography variant="h5" gutterBottom>
          Shipping Options
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6">Standard Shipping</Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery in 3-5 business days
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Price: Free (on orders over $50)
              </Typography>
              <Typography variant="body2" color="textSecondary">
                $5.99 for orders under $50
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6">Express Shipping</Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery in 1-2 business days
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Price: $15.99
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6">International Shipping</Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery in 7-14 business days
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Price: $29.99
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (Additional customs fees may apply)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Delivery Estimates Section */}
      <Box sx={{ mb: 5, px: 3 }}>
        <Typography variant="h5" gutterBottom>
          Delivery Estimates
        </Typography>
        <Typography variant="body1">
          Orders typically arrive within the estimated delivery time. However, factors such as weather, holidays, or carrier delays may affect actual delivery.
        </Typography>
      </Box>

      {/* Return Policy Section */}
      <Box sx={{ mb: 5, px: 3 }}>
        <Typography variant="h5" gutterBottom>
          Return Policy
        </Typography>
        <Typography variant="body1">
          You have 30 days to return any product. All returns are free and must be in their original condition.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Testimonials Section */}
      <Testimonials />

      <Divider sx={{ my: 4 }} />

      <Typography variant="body2" color="textSecondary" align="center">
        For more details, visit our help page or contact customer support.
      </Typography>
    </Box>
  );
}

export default Shipping;
