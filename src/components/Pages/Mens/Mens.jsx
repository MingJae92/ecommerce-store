import React from 'react';
import { Box, Typography } from '@mui/material';


function Mens() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Centers content vertically
        backgroundColor: '#e0e0e0', // Light gray background
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
        Men's Collection
      </Typography>

      <Typography 
        variant="body1" 
        sx={{
          marginTop: 2,
          color: '#555',
        }}
      >
        Explore the latest men's fashion trends!
      </Typography>

    </Box>
  );
}

export default Mens;
