import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        minHeight: '7vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        marginTop: 'auto', // Pushes the footer to the bottom of the page
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 My Store. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
