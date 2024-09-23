import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

function Signup() {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://via.placeholder.com/400" // Placeholder image URL
            alt="Signup"
            sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center"
            p={4}
            borderRadius={2}
            sx={{ 
              backgroundColor: '#fff', 
              boxShadow: 3, // Added shadow for depth
              height: '100%', 
              maxWidth: '400px', 
              margin: 'auto' // Center the form
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              sx={{ fontWeight: 'bold', color: '#111', mb: 2 }}
            >
              Join the Movement
            </Typography>
            <Typography 
              variant="body1" 
              color="textSecondary" 
              sx={{ mb: 4, textAlign: 'center' }} 
            >
              Sign up for exclusive offers and the latest news
            </Typography>
            
            <TextField 
              label="Name" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { borderColor: '#111' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' }
                }
              }}
            />
            <TextField 
              label="Email" 
              type="email" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { borderColor: '#111' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' }
                }
              }}
            />
            <TextField 
              label="Password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { borderColor: '#111' },
                  '&:hover fieldset': { borderColor: '#000' },
                  '&.Mui-focused fieldset': { borderColor: '#000' }
                }
              }}
            />
            
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ 
                mt: 3, 
                bgcolor: '#111', 
                '&:hover': { bgcolor: '#000' },
                borderRadius: 20 // Rounded button
              }}
            >
              Sign Up
            </Button>
            
            <Typography 
              variant="body2" 
              color="textSecondary" 
              sx={{ mt: 3, textAlign: 'center' }} 
            >
              Already have an account? <a href="#" style={{ color: '#111', textDecoration: 'none' }}>Log in</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;
