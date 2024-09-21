// NewsletterSignup.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h6">Subscribe to our Newsletter</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
