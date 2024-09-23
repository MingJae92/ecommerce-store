import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

function Women() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8bbd0", // Light pink background
        padding: 4,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#ad1457", // Dark pink color for the title
          marginTop: 4,
        }}
      >
        Women's Collection
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          color: "#555",
        }}
      >
        Discover the latest trends in women's fashion!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        onClick={() => console.log("Shop Now")}
      >
        Shop Now
      </Button>

      {/* Sample Product Grid */}
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
                padding: 2,
                textAlign: "center",
              }}
            >
              <img
                src={`https://via.placeholder.com/150`}
                alt={`Product ${index + 1}`}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                Product {index + 1}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                $49.99
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Women;
