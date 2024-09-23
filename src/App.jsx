import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Mens from "./components/Pages/Mens/Mens";
import Women from "./components/Pages/Women/Women";
import Kids from "./components/Pages/Kids/Kids";
import Sale from "./components/Pages/Sale/Sales";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Categories from "./components/Categories/Categories";
import PromotionalBanner from "./components/PromotionalBanner/PromotionalBanner";
import Testimonials from "./components/Testimonials/Testimonials";
import NewsletterSignup from "./components/NewsletterSignup/NewsLetterSignUp";
import Hero from "./components/Hero/Hero";

const App = () => {
  const location = useLocation(); // Get current route

  // List of paths where we want to hide the additional sections
  const hideSectionsOnPaths = ["/mens", "/women", "/kids", "/sale"];

  // Check if current path is in the list of paths where sections should be hidden
  const hideAdditionalSections = hideSectionsOnPaths.includes(location.pathname);

  return (
    <>
      <Box
        sx={{
          width: "100vw", // Full viewport width for the footer
          backgroundColor: "background.paper", // Adjust as needed
          position: "relative",
          margin: 0, // Remove any default margins
          padding: 0, // Remove any default padding
        }}
      >
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>

        {/* Conditionally render sections for non-selected routes */}
        {location.pathname === "/" && <Hero />}

        {!hideAdditionalSections && (
          <>
            <FeaturedProducts />
            <Categories />
            <PromotionalBanner />
            <Testimonials />
            <NewsletterSignup />
          </>
        )}
        
        <Footer />
      </Box>
    </>
  );
};

export default App;
