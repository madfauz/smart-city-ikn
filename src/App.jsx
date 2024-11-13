import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);

  return <Layout />;
}

export default App;
