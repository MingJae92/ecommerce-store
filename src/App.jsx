import React from "react";
import { Box } from "@mui/material";
import Landingpage from "./components/Landingpage/Landingpage";
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%', // Full width
          overflowX: 'hidden', // Prevent horizontal overflow
          padding: 0, // Remove padding
          margin: 0, // Remove margin
        }}
      >
        <Landingpage />
      </Box>
      <Box
        sx={{
          width: '100vw', // Full viewport width for the footer
          backgroundColor: 'background.paper', // Adjust as needed
          position: 'relative',
          margin: 0, // Remove any default margins
          padding: 0, // Remove any default padding
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default App;
