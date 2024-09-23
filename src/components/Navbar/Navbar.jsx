import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Breadcrumbs,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#000", fontWeight: "bold" }}>
          My Store
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#000", marginRight: "20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Home
            </Link>
            <Link to="/mens" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Men
            </Link>
            <Link to="/women" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Women
            </Link>
            <Link to="/kids" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Kids
            </Link>
            <Link to="/sale" style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Sale
            </Link>
          </Breadcrumbs>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ marginLeft: "10px", backgroundColor: "#000", color: "#fff" }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ marginLeft: "10px", backgroundColor: "#000", color: "#fff" }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
