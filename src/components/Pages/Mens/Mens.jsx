import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import Hero from "../../Hero/Hero";
import Testimonials from "../../Testimonials/Testimonials";
import PromotionalBanner from "../../PromotionalBanner/PromotionalBanner";

function Mens() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", paddingTop: 4, paddingBottom: 8 }}>
      <Hero />

      {/* Intro Section */}
      <Container sx={{ paddingTop: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Explore Men's Fashion
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#555",
            marginBottom: 4,
          }}
        >
          Stay ahead of the fashion game with our latest styles. Whether you're
          looking for something casual or formal, we have you covered.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "10px 30px", fontSize: "16px" }}
            onClick={() => console.log("Shop Now")}
          >
            Shop Now
          </Button>
        </Box>
      </Container>

      {/* Product Grid Section */}
      <Container sx={{ marginTop: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          Our Top Picks
        </Typography>
        <Grid container spacing={4}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 1,
                  padding: 2,
                  textAlign: "center",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={`https://via.placeholder.com/300`}
                  alt={`Product ${index + 1}`}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Product {index + 1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", marginBottom: 1 }}
                >
                  $49.99
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: 1 }}
                  onClick={() => console.log("View Product")}
                >
                  View Product
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <PromotionalBanner />

      <Testimonials />
    </Box>
  );
}

export default Mens;
