import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';


function Mens() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#e0e0e0',
        padding: 4,
      }}
    >
/
      
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginTop: 4,
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
                alt={`Product ${index + 1}`} 
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                Product {index + 1}
              </Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>
                $49.99
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Mens;
