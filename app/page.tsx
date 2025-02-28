"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
    </div>
  );
}
