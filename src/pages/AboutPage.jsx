import React from "react";
import MainVismis from "../components/TentangKami/MainVismis";
import Perkenalan from "../components/TentangKami/Perkenalan";
import Sambutan from "../components/TentangKami/Sambutan";
import TimKami from "../components/TentangKami/TimKami";

export default function AboutPage() {
  return (
    <>
      <Sambutan />
      <Perkenalan />
      <MainVismis />
      <TimKami />
    </>
  );
}
