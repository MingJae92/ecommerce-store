import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

function Sales() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Centers content vertically
        backgroundColor: '#ffe0b2', // Light orange background
        padding: 4,
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          fontWeight: 'bold',
          color: '#d32f2f', // Red color for the title
          marginTop: 4,
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

      <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginTop: 3 }}
        onClick={() => console.log('Shop Now')}
      >
        Shop Now
      </Button>

      {/* Sample Product Grid */}
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 1,
                padding: 2,
                textAlign: 'center',
              }}
            >
              <img 
                src={`https://via.placeholder.com/150`} 
                alt={`Sale Product ${index + 1}`} 
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                Sale Product {index + 1}
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                $29.99
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Sales;
