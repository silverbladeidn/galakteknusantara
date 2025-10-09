// src/components/HomaPage.jsx
import React from "react";
import HeroSlider from "../components/Dashboard/HeroSlider"
import Perkenalan from "../components/Dashboard/Perkenalan"
import Solutions from "../components/Dashboard/Solutions"
import Kontak from "../components/Dashboard/Kontak"
import Gallery from "../components/Dashboard/Gallery"

export default function HomePage() {
  return (
      <>
        <HeroSlider />
        <Perkenalan />
        <Solutions />
        <Kontak />
        <Gallery />
      </>
    )
  }
