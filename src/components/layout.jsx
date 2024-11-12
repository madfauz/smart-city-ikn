import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Feature from "./Feature";
import Project from "./Project";
import Desc from "./Desc";
import News from "./News";
import Footer from "./Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex flex-col w-[100%] items-center justify-start min-h-screen m-auto">
        <Project />
        <Desc />
        <News />
      </main>
    </React.Fragment>
  );
};

export default Layout;
