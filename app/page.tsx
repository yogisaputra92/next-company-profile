"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <SplashCursor/>
    </div>
  );
}
