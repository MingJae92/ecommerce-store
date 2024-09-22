import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Categories from "../Categories/Categories";
import PromotionalBanner from "../PromotionalBanner/PromotionalBanner";
import Testimonials from "../Testimonials/Testimonials";
import NewsletterSignup from "../NewsletterSignup/NewsLetterSignUp";
import { Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// Import the components for the different routes
import Mens from "../Pages/Mens/Mens";
import Women from "../Pages/Women/Women";
import Kids from "../Pages/Kids/Kids";
import Sale from "../Pages/Sale/Sales";

function Landingpage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure the page takes at least the full height
      }}
    >
   
        <Navbar />
        <Routes>
          {/* Define your routes here */}

          <Route path="/mens" element={<Mens />} /> {/* Mens section */}
          <Route path="/women" element={<Women />} /> {/* Women section */}
          <Route path="/kids" element={<Kids />} /> {/* Kids section */}
          <Route path="/sale" element={<Sale />} /> 
        </Routes>
 

      {/* Other components that always appear on the landing page */}
      <FeaturedProducts />
      <Categories />
      <PromotionalBanner />
      <Testimonials />
      <NewsletterSignup />
    </Box>
  );
}

export default Landingpage;
