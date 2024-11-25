"use client";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderPage } from "../components/Header";
import { Footer } from "../components/Footer";
import { MAP } from "../components/Map";

export default function Contactos() {
  return (
    <>
      {" "}
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          {" "}
          <HeaderPage />
          <div className="bg-[url('/bgPages.jpg')] bg-cover bg-center flex items-center justify-center h-80">
            <h1 className="text-white text-4xl text-center font-sans font-semibold">
              Contacte-nos
            </h1>
          </div>
          <div className="container mx-auto px-8 mt-24">
            <MAP />
          </div>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
