import React from 'react';
import { Box, Typography } from '@mui/material';

function Women() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Centers content vertically
        backgroundColor: '#f8bbd0', // Light pink background to suggest feminine style
        padding: 4, // Adds padding around the content
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          fontWeight: 'bold',
          color: '#ad1457', // Dark pink color for the title
        }}
      >
        Women's Collection
      </Typography>

      <Typography 
        variant="body1" 
        sx={{
          marginTop: 2,
          color: '#555',
        }}
      >
        Discover the latest trends in women's fashion!
      </Typography>
    </Box>
  );
}

export default Women;
