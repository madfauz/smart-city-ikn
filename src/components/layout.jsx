import React from "react";
import "../app.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Feature from "./Feature";
import Project from "./Project";
import Desc from "./Desc";
import Modal from "./Modal";
import News from "./News";
import Footer from "./Footer";


const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex flex-col w-[100%] items-center justify-start min-h-screen m-auto">
        <Navbar />
        <Carousel />
        <Feature />
        <Project />
        <Desc />
        <News />
        <Modal />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
