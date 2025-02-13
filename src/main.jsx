import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDd0SLafkHKhdUCn4YMD2mV8gFivVKBzWk",
  authDomain: "reactentrega-ae62a.firebaseapp.com",
  projectId: "reactentrega-ae62a",
  storageBucket: "reactentrega-ae62a.firebasestorage.app",
  messagingSenderId: "848608366964",
  appId: "1:848608366964:web:73d3d3132fa40297b7dc21",
  measurementId: "G-GW1009191F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
