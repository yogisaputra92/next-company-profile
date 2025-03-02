"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";
import Product from "./components/Product";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="select-none">
      <Navbar/>
      <Header/>
      <Services/>
      <Product/>
      <Footer/>
      {/* <SplashCursor/> */}
    </div>
  );
}
