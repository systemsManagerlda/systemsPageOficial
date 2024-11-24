"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImagesSliderDemo() {
  // const images = [
  //   "/img/FacturaçãoAduaneira.jpg",
  //   "/img/FacturaçãoAgua.jpg",
  //   "/img/FolhaSalario.jpg",
  //   "/img/POS.jpg",
  //   "/img/RestaurantesBares.jpg",
  //   "/img/Sistema de Presenças.jpg",
  // ];

  return <ImagesSlider className="h-[40rem]  mt-24"></ImagesSlider>;
}
