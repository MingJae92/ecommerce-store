import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Photogrid from './components/Photogrid/Photogrid';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Grid */}
      {/* <Photogrid /> */}

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;
