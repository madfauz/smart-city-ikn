import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.init({
  once: true,
  offset: 150,
  delay: 200,
  duration: 700,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
