import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';


function Login() {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        mt={8}
        p={4}
        border={1}
        borderRadius={2}
        borderColor="grey.300"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
 
    </Container>
  );
}

export default Login;
