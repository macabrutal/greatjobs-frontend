import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "../About/About";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Outlet />
      <About />
      <Footer />
    </>
  );
}
