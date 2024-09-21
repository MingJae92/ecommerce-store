import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Breadcrumbs } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold' }}>
          My Store
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#000', marginRight: '20px' }}>
            <Typography sx={{ textDecoration: 'none', color: '#000' }}>Home</Typography>
            <Typography sx={{ textDecoration: 'none', color: '#000' }}>Men</Typography>
            <Typography sx={{ textDecoration: 'none', color: '#000' }}>Women</Typography>
            <Typography sx={{ textDecoration: 'none', color: '#000' }}>Kids</Typography>
            <Typography sx={{ textDecoration: 'none', color: '#000' }}>Sale</Typography>
          </Breadcrumbs>
          <Button color="inherit" sx={{ marginLeft: '15px', border: '1px solid #000' }}>
            Login
          </Button>
          <Button color="inherit" sx={{ marginLeft: '10px', backgroundColor: '#000', color: '#fff' }}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
