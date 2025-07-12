import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import emailjs from "@emailjs/browser"; // Import EmailJS

// Add this at the top of your src/index.js
import "@fontsource/inter/400.css"; // Regular weight
import "@fontsource/inter/500.css"; // Medium weight
import "@fontsource/inter/600.css"; // Semi-bold weight
import "@fontsource/inter/700.css"; // Bold weight

// Initialize EmailJS with your User ID
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY); // Replace with your actual User ID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
