import React from "react";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import Categories from "../../Categories/Categories";
import PromotionalBanner from "../../PromotionalBanner/PromotionalBanner";
import Testimonials from "../../Testimonials/Testimonials";
import NewsletterSignup from "../../NewsletterSignup/NewsLetterSignUp";
function Home() {
  return (
    <>
      <FeaturedProducts />
      <Categories />
      <PromotionalBanner />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}

export default Home;
