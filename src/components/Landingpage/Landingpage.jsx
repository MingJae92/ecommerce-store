import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts"
import Categories from "../Categories/Categories"
import PromotionalBanner from "../PromotionalBanner/PromotionalBanner"
import Testimonials from "../Testimonials/Testimonials"
import NewsletterSignup from "../NewsletterSignup/NewsLetterSignUp"

import { Box } from '@mui/material';

function Landingpage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure the page takes at least the full height
      }}
    >
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <PromotionalBanner />
      <Testimonials />
      <NewsletterSignup />
      
    </Box>
  );
}

export default Landingpage;
