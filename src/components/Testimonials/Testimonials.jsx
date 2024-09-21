import React from 'react';
import { Box, Typography } from '@mui/material';

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', p: 4, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', color: '#2e4c9a' }}>
        Customer Testimonials
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body1">"Great products! Fast shipping!" - Happy Customer</Typography>
      </Box>
    </Box>
  );
};

export default Testimonials;
