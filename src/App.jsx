import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Mens from "./components/Pages/Mens/Mens";
import Women from "./components/Pages/Women/Women";
import Kids from "./components/Pages/Kids/Kids";
import Sale from "./components/Pages/Sale/Sales";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import Shipping from "./components/Pages/Shipping/Shipping";
import Returns from "./components/Pages/Returns/Returns";
import Paymentoptions from "./components/Pages/Paymentoptions/Paymentoptions";
import Careers from "./components/Pages/Careers/Careers";
import Sustainability from "./components/Pages/Sustainability/Sustainability";
import Livechat from "./components/Pages/Contactus/Livechat/Livechat";
import Emailform from "./components/Pages/Contactus/Emailform/Emailform";
import Home from "./components/Pages/Home/Home";
import News from "./components/Pages/News/News";
import Callus from "./components/Pages/Callus/Callus";
import Orderstatus from "./components/Orderstatus/Orderstatus";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const location = useLocation(); // Get current route

  // List of paths where we want to hide the additional sections
  const hideSectionsOnPaths = [
    "/mens",
    "/women",
    "/kids",
    "/sale",
    "/signup",
    "/login",
    "/shipping",
    "/returns",
    "/paymentoptions",
    "/careers",
    "/sustainability",
    "/livechat",
    "/email",
    "/news",
    "/email",
    "/callus",
    "/careers",
    "/orderstatus"
  ];

  // Check if current path is in the list of paths where sections should be hidden
  const hideAdditionalSections = hideSectionsOnPaths.includes(
    location.pathname
  );

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
        <GoogleOAuthProvider clientId="752043277035-asja92qb9cfssqhsssv6h7pa53hpvhpa.apps.googleusercontent.com">
        <Routes>
          {/* Define your routes here */}
          <Route path="/mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/paymentoptions" element={<Paymentoptions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/livechat" element={<Livechat />} />
          <Route path="/email" element={<Emailform />} />
          <Route path="/news" element={<News />} />
          <Route path="callus" element={<Callus/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/orderstatus" element={<Orderstatus/>}/>

        </Routes>
        </GoogleOAuthProvider>
       

        {/* Conditionally render sections for non-selected routes */}
        {location.pathname === "/" && <Hero />}

        {!hideAdditionalSections && <Home />}

        <Footer />
      </Box>
    </>
  );
};

export default App;
