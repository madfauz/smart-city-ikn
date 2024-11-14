import { useState } from "react";

import "./App.css";
import Layout from "./components/layout";
import "./i18n";

import { useTranslation } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);

  return <Layout />;
}

export default App;
