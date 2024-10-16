import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Hero = () => {
  const [storeImage, setStoreImage] = useState(null); // Changed to null for a single item
  const [loading, setLoading] = useState(true); // Initially set to true
  const [error, setError] = useState(null);
  const shopApiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const shopImageFetch = async () => {
      try {
        const shopImageResponse = await axios.get(shopApiUrl);
        console.log(shopImageResponse.data);
        setStoreImage(shopImageResponse.data[1]); // Set only the first item
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error(error);
        setError(true); // Set error to true on failure
        setLoading(false);
      }
    };
    shopImageFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (error) {
    return <div>Error loading images.</div>; // Handle error state
  }

  if (!storeImage) {
    return <div>No images found.</div>; // Handle empty data case
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 4, mb: 4, backgroundColor: "#f9f9f9", p: 2 }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: { xs: "auto", md: "80vh" }, p: 2 }}
      >
        <Box flex={1} sx={{ p: 2 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3.5rem" } }}
            gutterBottom
          >
            Elevate Your Game
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 3, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Discover the latest performance gear and stay ahead of the
            competition.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
          >
            Shop Now
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "auto", md: "100%" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <img
            src={storeImage.image}
            alt={storeImage.title}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
