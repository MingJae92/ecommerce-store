import React from 'react';
import { Box, Typography } from '@mui/material';

function Sales() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Centers content vertically
        backgroundColor: '#ffe0b2', // Light orange background to suggest sales or promotions
        padding: 4, // Adds padding around the content
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          fontWeight: 'bold',
          color: '#d32f2f', // Red color for the title to emphasize the sales
        }}
      >
        Sales Collection
      </Typography>

      <Typography 
        variant="body1" 
        sx={{
          marginTop: 2,
          color: '#333',
        }}
      >
        Grab the best deals on our products!
      </Typography>
    </Box>
  );
}

export default Sales;
