import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.init({
  once: false,
  offset: 300,
  delay: 400,
  duration: 1000,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
