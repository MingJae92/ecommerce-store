import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const NewsletterSignup = () => {
  return (
    <Grid container justifyContent="center" sx={{ my: 4 }}>
      <Grid item xs={12} md={8} lg={6}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f0f0f0',
            py: 6,
            px: { xs: 2, sm: 4, md: 8 },
            textAlign: 'center',
            borderRadius: 2, // Optional: adds rounded corners
            boxShadow: 1, // Optional: adds a slight shadow
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up for Our Newsletter
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Stay updated with the latest deals and exclusive offers.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center', // Center items vertically in the row layout
            }}
          >
            <TextField 
              label="Enter your email" 
              variant="outlined" 
              sx={{ flex: 1, minWidth: { xs: 'auto', sm: '200px' } }} // Set a minimum width for better layout
            />
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewsletterSignup;
