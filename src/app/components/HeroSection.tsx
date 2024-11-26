"use client";

import { GlobeDemo } from "./Globe";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const HeroSection = () => {
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
                  <div className="flex justify-center text-center">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                      <span>Solicitar Demo</span>
                    </HoverBorderGradient>
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
