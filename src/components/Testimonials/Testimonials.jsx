// Testimonials.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Testimonials = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>
        Customer Testimonials
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body1">"Great products! Fast shipping!" - Happy Customer</Typography>
      </Box>
    </>
  );
};

export default Testimonials;
