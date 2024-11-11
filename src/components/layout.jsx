import React from "react";
import Navbar from "./Navbar";
import Carousel from "./carousel";
import Feature from "./Feature";
import Project from "./Project";
import Desc from "./Desc";
import News from "./News";
import Footer from "./Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <main className="flex flex-col w-[100%] items-center justify-start min-h-screen m-auto">
        <News />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
