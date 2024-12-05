"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GlobeDemo } from "./Globe";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaWhatsapp } from "react-icons/fa";

export const HeroSection = () => {
  const [name, setName] = useState("");

  const handleSendWhatsAppMessage = () => {
    const number = "258862288823"; // Substitua pelo número do WhatsApp
    const message = `Olá, meu nome é ${name}. Gostaria de mais informações sobre o Systems Manager ERP. Posso ter uma demonstração?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <>
      <div className="container mx-auto hidden sm:block gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              <p className="font-serif font-bold text-6xl">Systems Manager</p>
              {/* <TextHoverEffect text="Systems Manager" /> */}
              <TextGenerateEffect
                words={"Sistema de Gestão Empresarial ERP e de Facturação."}
                className="font-serif font-bold text-4xl text-blue-500"
              />
              <TextGenerateEffect
                words={
                  "A melhores ferramenta de Gestão Empresarial ERP e de Facturação de Moçambique. Um sistema simples, rápito e poderoso!"
                }
              />

              <div className="flex justify-end">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-center">
                    {" "}
                    <p className="text-xl text-bold font-serif">
                      Software Licenciado pela A.T.
                    </p>
                  </div>
                  {/* <Button
                    as={Link}
                    color="primary"
                    href="#"
                    variant="bordered"
                    className="w-56"
                  >
                    Solicitar Demo
                  </Button> */}
                  {/* <Link href="https://wa.link/fbohza">
                    <div className="flex justify-center text-center">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-transparent bg-transparent text-black dark:text-white flex items-center space-x-2"
                      >
                        <span>Solicitar Demo</span>
                      </HoverBorderGradient>
                    </div>
                  </Link> */}
                  <div className="flex flex-col items-center space-y-4">
                    <input
                      type="text"
                      placeholder="Nome Pessoal/Entidade"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendWhatsAppMessage}
                      className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      <div className="flex flex-row gap-4 items-center">
                        <span>Solicitar Demo</span>
                        <span>
                          <FaWhatsapp />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GlobeDemo />
        </div>
      </div>
    </>
  );
};
