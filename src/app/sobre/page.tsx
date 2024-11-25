"use client";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderPage } from "../components/Header";
import { Footer } from "../components/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Sobre() {
  const defaultContent =
    "Inovar a gestão empresarial com softwares, garantindo o acesso global e contínuo aos dados empresariais, revolucionando a eficiência e controle operacional!";
  const defaultContent4 =
    "Tornar-se a melhor Empresa no ramo de desenvolvimento de Softwares e Soluções Tecnológicas para a Gestão Empresarial em Moçambique.";
  return (
    <>
      {" "}
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          {" "}
          <HeaderPage />
          <div className="bg-[url('/bgPages.jpg')] bg-cover bg-center flex items-center justify-center h-80">
            <h1 className="text-white text-4xl text-center font-sans font-semibold">
              Sobre-Nós
            </h1>
          </div>
          <div className="container mx-auto px-8 mt-24 text-neutral-500">
            <p>
              {" "}
              A Systems Manager é uma empresa voltada ao desenvolvimento de
              Softwares, tendo como foco Softwares de Gestão empresarial ERP,
              com vista a apresentar soluções, digitalizando processos
              operacionais e disponibilizando ferramentas de gerenciamento para
              a tomada de decisões de forma rápida, assertiva e rápida. Os
              nossos Softwares são desenvolvidos com alta Engenharia de
              programação, contribuindo assim, para a melhoria da gestão e
              controle das pequenas, médias e grandes Empresa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Accordion isCompact>
                  <AccordionItem key="1" aria-label="Missão" title="Missão">
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion isCompact>
                  <AccordionItem key="4" aria-label="Visão" title="Visão">
                    {defaultContent4}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Accordion isCompact>
                  <AccordionItem key="1" aria-label="Slogan" title="Slogan">
                    A única coisa permanente no universo é a mudança...
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion isCompact>
                  <AccordionItem key="4" aria-label="Valores" title="Valores">
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        1. Inovação Contínua
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Estamos comprometidos com o avanço constante das
                          tecnologias e soluções, desenvolvendo sistemas que
                          acompanham e antecipam as demandas do mercado.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">2. Foco no Cliente</span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          As necessidades dos nossos clientes estão no centro de
                          tudo o que fazemos. Trabalhamos para oferecer soluções
                          personalizadas e um atendimento excepcional.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        3. Excelência Operacional
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Garantimos a entrega de produtos e serviços de alta
                          qualidade, com foco em eficiência, precisão e
                          confiabilidade.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        4. Transparência e Ética
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Actuamos de forma ética e transparente, valorizando a
                          confiança e a integridade em todas as relações
                          comerciais e com nossos colaboradores.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        5. Colaboração e Parceria
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Acreditamos na força da colaboração, seja dentro da
                          nossa equipe ou com nossos clientes e parceiros, para
                          alcançar resultados extraordinários.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        6. Sustentabilidade e Responsabilidade Social
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Nos esforçamos para criar soluções que respeitem o
                          meio ambiente e que contribuam para o desenvolvimento
                          sustentável das comunidades onde atuamos.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        7. Adaptabilidade e Resiliência
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Enfrentamos desafios com flexibilidade, respondendo
                          rapidamente às mudanças para garantir o sucesso de
                          nossos clientes e parceiros.
                        </li>
                      </ul>
                    </div>
                    <div className="font-serif text-neutral-500 mt-4">
                      <span className="text-blue-500">
                        8. Valorização de Pessoas
                      </span>
                      <ul className="pl-5 list-square space-y-1 mt-1">
                        <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                          Investimos no crescimento e bem-estar de nossos
                          colaboradores, promovendo um ambiente inclusivo e
                          incentivador.
                        </li>
                      </ul>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
