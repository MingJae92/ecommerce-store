import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

try {
  const clientId = "752043277035-asja92qb9cfssqhsssv6h7pa53hpvhpa.apps.googleusercontent.com";

  if (!clientId) {
    throw new Error("Google OAuth Client ID is not defined.");
  }

  createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={clientId}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </GoogleOAuthProvider>
  );

  console.log("Google OAuth Client ID is recognized:", clientId);
} catch (error) {
  console.error("Error in rendering the application:", error.message);
}
