import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, backgroundColor: '#f9f9f9', p: 4 }}>
      <Typography variant="h6" sx={{ color: '#2e4c9a' }}>
        Subscribe to our Newsletter
      </Typography>
      <Button variant="contained" sx={{ mt: 2, backgroundColor: '#f46a6a', color: '#fff' }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
