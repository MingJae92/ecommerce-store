import React from 'react';
import { Box, Typography } from '@mui/material';

function Kids() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensures the content is centered vertically
        backgroundColor: '#f5f5f5', // Light background color
        padding: 4, // Adds padding around the content
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Kids Collection
      </Typography>

      <Typography 
        variant="body1" 
        sx={{
          marginTop: 2,
          color: '#555',
        }}
      >
        Discover the latest trends for kids!
      </Typography>
    </Box>
  );
}

export default Kids;
