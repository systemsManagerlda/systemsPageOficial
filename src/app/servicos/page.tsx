"use client";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderPage } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export default function Serviços() {
  const [isClicked, setIsClicked] = useState("");
  return (
    <>
      {" "}
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          {" "}
          <HeaderPage />
          <div className="bg-[url('/bgPages.jpg')] bg-cover bg-center flex items-center justify-center h-80">
            <h1 className="text-white text-4xl text-center font-sans font-semibold">
              Nossos Serviços
            </h1>
          </div>
          <div className="container mx-auto px-8 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <p
                  className="text-blue-500 font-bold mb-1 cursor-pointer hover:underline"
                  onClick={() => setIsClicked("Gestão Empresarial")}
                >
                  Gestão Empresarial
                </p>
                <p
                  className="text-blue-500 font-bold mb-1 cursor-pointer hover:underline"
                  onClick={() => setIsClicked("Desenvolvimento de Software")}
                >
                  Desenvolvimento de Software
                </p>
                <p
                  className="text-blue-500 font-bold mb-1 cursor-pointer hover:underline"
                  onClick={() => setIsClicked("Design Gráfico")}
                >
                  Design Gráfico
                </p>
                <p
                  className="text-blue-500 font-bold mb-1 cursor-pointer hover:underline"
                  onClick={() =>
                    setIsClicked("Auditoria de Sistemas de Informação")
                  }
                >
                  Auditoria de Sistemas de Informação
                </p>
                <p
                  className="text-blue-500 font-bold mb-1 cursor-pointer hover:underline"
                  onClick={() =>
                    setIsClicked("Manutenção de Sistemas Informáticos")
                  }
                >
                  Manutenção de Sistemas Informáticos
                </p>
              </div>
              <div className="grid col-span-4 h-[550px] overflow-y-scroll">
                {isClicked === "Gestão Empresarial" && (
                  <>
                    {" "}
                    <div>
                      <p className="text-blue-500 text-2xl font-bold mb-4">
                        Gestão Empresarial
                      </p>
                      <p className="font-serif text-neutral-500">
                        Gestão Empresarial é um serviço essencial oferecido pela{" "}
                        <span className="text-blue-500">Systems Manager</span>,
                        projectado para ajudar empresas a optimizar suas
                        operações, melhorar a eficiência e tomar decisões
                        estratégicas informadas. Com base em tecnologia avançada
                        e um profundo conhecimento de processos empresariais,
                        este serviço é voltado para empresas de todos os
                        tamanhos e sectores.
                      </p>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Descrição do Serviço
                      </p>
                      <p className="font-serif text-neutral-500">
                        O serviço de Gestão Empresarial da{" "}
                        <span className="text-blue-500">Systems Manager</span> é
                        baseado na implementação e suporte de soluções
                        integradas, como o{" "}
                        <span className="text-blue-500">
                          ERP Systems Manager
                        </span>
                        , que unifica diferentes áreas de uma organização em um
                        único sistema. Isso inclui:
                      </p>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          a) Automatização de Processos:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Digitaliza e automatiza tarefas administrativas e
                            operacionais, reduzindo erros manuais.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          b) Centralização de Dados:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Armazena informações cruciais de várias áreas
                            (financeiro, vendas, RH, estoque, etc.) em um único
                            local, garantindo acessibilidade e segurança.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          c) Relatórios e Análises:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Gera relatórios detalhados e em tempo real, ajudando
                            na análise de desempenho e na identificação de
                            oportunidades de crescimento.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          d) Conformidade Legal e Fiscal:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Garante que as operações empresariais estejam em
                            conformidade com as leis locais, incluindo emissão
                            de facturas e relatórios fiscais.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          e) Personalização:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Adapta o software e os processos às necessidades
                            específicas de cada cliente, seja para pequenas
                            empresas ou grandes corporações.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          f) Suporte Técnico:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Oferece suporte contínuo, treinamento e
                            actualizações para assegurar que o sistema continue
                            a atender às demandas em constante mudança.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Benefícios para os Clientes
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Redução de Custos:
                            </span>{" "}
                            Menos gastos com processos ineficientes e
                            redundantes.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Aumento de Produtividade:
                            </span>{" "}
                            Funcionários podem focar em tarefas estratégicas em
                            vez de operacionais.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Melhor Tomada de Decisões:
                            </span>{" "}
                            Informações em tempo real permitem decisões mais
                            rápidas e assertivas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Escalabilidade:
                            </span>{" "}
                            O sistema pode crescer junto com o negócio,
                            integrando novos módulos ou recursos conforme
                            necessário.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {isClicked === "Desenvolvimento de Software" && (
                  <>
                    {" "}
                    <div>
                      <p className="text-blue-500 text-2xl font-bold mb-4">
                        Desenvolvimento de Software
                      </p>
                      <p className="font-serif text-neutral-500">
                        O Desenvolvimento de Software é um dos principais
                        serviços oferecidos pela{" "}
                        <span className="text-blue-500">Systems Manager</span>,
                        focado na criação de soluções tecnológicas
                        personalizadas para atender às necessidades específicas
                        de empresas e organizações. Este serviço combina
                        inovação, eficiência e expertise técnica para entregar
                        sistemas de alta qualidade que otimizam operações e
                        impulsionam o crescimento.
                      </p>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Descrição do Serviço
                      </p>
                      <p className="font-serif text-neutral-500">
                        O serviço de Desenvolvimento de Software da{" "}
                        <span className="text-blue-500">Systems Manager</span>{" "}
                        abrange todas as etapas do ciclo de vida de
                        desenvolvimento, incluindo:
                      </p>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          a) Análise de Requisitos:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Identifica as necessidades e desafios específicos de
                            cada cliente, garantindo que o software seja
                            projetado sob medida.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          b) Planejamento e Design:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Criação de arquiteturas e interfaces intuitivas que
                            alinham funcionalidade com uma excelente experiência
                            do usuário.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          c) Desenvolvimento Personalizado:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Utiliza tecnologias modernas para criar sistemas sob
                            medida, como:
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                <span className="text-blue-500">
                                  Aplicativos Web e Mobile:
                                </span>{" "}
                                Sistemas acessíveis e responsivos para aumentar
                                a mobilidade e acessibilidade.
                              </li>
                            </ul>
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                <span className="text-blue-500">
                                  Integrações:
                                </span>{" "}
                                Conexão com APIs e sistemas existentes.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          d) Testes e Garantia de Qualidade:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Realiza testes rigorosos para garantir desempenho,
                            segurança e confiabilidade.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">e) Implantação:</span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Implementação eficiente, minimizando interrupções
                            nas operações do cliente.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          f) Manutenção e Suporte:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Oferece suporte técnico contínuo e atualizações para
                            garantir que o software permaneça eficiente e
                            seguro.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Diferenciais do Serviço
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Customização Completa:
                            </span>{" "}
                            Desenvolvimento de sistemas alinhados às
                            particularidades do cliente.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Uso de Tecnologias Modernas:
                            </span>{" "}
                            Aplicação de frameworks e linguagens de programação
                            de ponta, como Next.js, React, Node.js, entre
                            outras.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Foco em Escalabilidade:
                            </span>{" "}
                            Os sistemas são projetados para acompanhar o
                            crescimento das empresas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">Conformidade:</span>{" "}
                            Garantia de que os softwares atendam a requisitos
                            legais e de mercado.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Benefícios para os Clientes
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Soluções Sob Medida:
                            </span>{" "}
                            Atendem exatamente às demandas operacionais e
                            estratégicas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Aumento da Eficiência:
                            </span>{" "}
                            Automatizam processos e integram operações de forma
                            fluida.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Redução de Custos:
                            </span>{" "}
                            Eliminam a necessidade de softwares genéricos e
                            ineficientes.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Vantagem Competitiva:
                            </span>{" "}
                            Sistemas inovadores ajudam a empresa a se destacar
                            no mercado.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {isClicked === "Design Gráfico" && (
                  <>
                    {" "}
                    <div>
                      <p className="text-blue-500 text-2xl font-bold mb-4">
                        Design Gráfico
                      </p>
                      <p className="font-serif text-neutral-500">
                        O Design Gráfico é um serviço estratégico oferecido pela{" "}
                        <span className="text-blue-500">Systems Manager</span>,
                        que combina criatividade e expertise técnica para
                        desenvolver soluções visuais impactantes e alinhadas à
                        identidade da marca. Este serviço é voltado para
                        empresas que buscam se destacar no mercado por meio de
                        materiais gráficos profissionais e esteticamente
                        atraentes.
                      </p>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Descrição do Serviço
                      </p>
                      <p className="font-serif text-neutral-500">
                        O serviço de Design Gráfico da{" "}
                        <span className="text-blue-500">Systems Manager</span>{" "}
                        abrange uma ampla gama de soluções visuais, incluindo:
                      </p>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          a) Criação de Identidade Visual:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Desenvolvimento de logotipos, cores e elementos
                            gráficos que refletem a essência da marca e aumentam
                            seu reconhecimento.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          b) Design de Materiais Publicitários:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Produção de materiais promocionais, como:
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Cartazes e banners.
                              </li>
                            </ul>
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Panfletos e brochuras.
                              </li>
                            </ul>
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Postagens e anúncios para redes sociais.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          c) Design para Web:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Criação de layouts modernos e responsivos para
                            sites, aplicativos e interfaces digitais.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          d) Design Corporativo:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Criação de materiais internos e externos para
                            empresas, incluindo:
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Apresentações profissionais.
                              </li>
                            </ul>
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Papelaria corporativa (cartões de visita,
                                envelopes, etc.).
                              </li>
                            </ul>
                            <ul className="pl-5 list-square space-y-1 mt-1">
                              <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                                Relatórios e manuais de marca.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          e) Edição e Manipulação de Imagens:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Ajustes, edições e aprimoramentos para fotografias e
                            elementos visuais.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          f) Consultoria Criativa:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Orientação estratégica para alinhar os materiais
                            gráficos aos objetivos de marketing e comunicação.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Diferenciais do Serviço
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Soluções Personalizadas:
                            </span>{" "}
                            Cada projeto é adaptado às necessidades específicas
                            do cliente, garantindo originalidade e relevância.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Padrões de Alta Qualidade:
                            </span>{" "}
                            Entregas que atendem às expectativas do mercado e
                            criam impacto visual.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Uso de Ferramentas Modernas:
                            </span>{" "}
                            Utilização de softwares líderes, como Adobe
                            Illustrator, Photoshop e Figma.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Foco em Coerência de Marca:
                            </span>{" "}
                            Garantia de que todos os materiais seguem um padrão
                            visual consistente.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Benefícios para os Clientes
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Reconhecimento de Marca:
                            </span>{" "}
                            Elementos gráficos profissionais ajudam a empresa a
                            se destacar e a ser lembrada.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Engajamento Aumentado:
                            </span>{" "}
                            Materiais visuais atraentes capturam a atenção do
                            público e aumentam a interação.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Comunicação Eficiente:
                            </span>{" "}
                            Designs claros e bem estruturados transmitem a
                            mensagem com eficácia.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Valorização da Imagem Corporativa:
                            </span>{" "}
                            Uma apresentação visual refinada reforça a
                            credibilidade e a confiança na marca.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {isClicked === "Auditoria de Sistemas de Informação" && (
                  <>
                    {" "}
                    <div>
                      <p className="text-blue-500 text-2xl font-bold mb-4">
                        Auditoria de Sistemas de Informação
                      </p>
                      <p className="font-serif text-neutral-500">
                        A Auditoria de Sistemas de Informação é um serviço
                        essencial oferecido pela{" "}
                        <span className="text-blue-500">Systems Manager</span>,
                        que garante a eficiência, segurança e conformidade das
                        soluções tecnológicas utilizadas por empresas. Este
                        serviço identifica vulnerabilidades, avalia processos e
                        valida a integridade dos sistemas para ajudar as
                        organizações a manterem a competitividade e a
                        conformidade com regulamentações.
                      </p>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Descrição do Serviço
                      </p>
                      <p className="font-serif text-neutral-500">
                        O serviço de Auditoria de Sistemas de Informação da{" "}
                        <span className="text-blue-500">Systems Manager</span> é
                        estruturado para avaliar de forma abrangente os sistemas
                        e infraestruturas de TI, incluindo:
                      </p>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          a) Avaliação de Segurança:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Verificação de vulnerabilidades em redes, sistemas e
                            aplicações para mitigar riscos cibernéticos.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          b) Conformidade Regulatória:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Análise da aderência a normas e leis aplicáveis,
                            como proteção de dados (GDPR) e normas fiscais.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          c) Análise de Processos:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Revisão de fluxos de trabalho em sistemas
                            empresariais para identificar ineficiências ou
                            falhas.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          d) Auditoria de Dados:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Validação da integridade, consistência e
                            confiabilidade das informações armazenadas nos
                            sistemas.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          e) Auditoria de Software:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Avaliação de licenças, actualizações e desempenho de
                            softwares utilizados pela empresa.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          f) Testes de Recuperação e Continuidade:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Verificação de planos de recuperação de desastres e
                            sistemas de backup para garantir a continuidade dos
                            negócios.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          g) Relatórios e Recomendações:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Fornecimento de relatórios detalhados com insights e
                            sugestões práticas para melhorar a infraestrutura de
                            TI.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Diferenciais do Serviço
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Metodologias Avançadas:
                            </span>{" "}
                            Uso de frameworks reconhecidos, como COBIT, ISO
                            27001 e ITIL, para garantir auditorias abrangentes e
                            alinhadas às melhores práticas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Equipa Especializada:
                            </span>{" "}
                            Profissionais experientes com profundo conhecimento
                            técnico e regulatório.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Abordagem Personalizada:
                            </span>{" "}
                            Cada auditoria é adaptada às necessidades e
                            objetivos específicos do cliente.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Foco em Proatividade:
                            </span>{" "}
                            Identificação de problemas potenciais antes que se
                            tornem críticos, minimizando riscos.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Benefícios para os Clientes
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Segurança Reforçada:
                            </span>{" "}
                            Proteção contra ataques cibernéticos e vazamentos de
                            dados.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Conformidade Garantida:
                            </span>{" "}
                            Redução de riscos legais e regulatórios, evitando
                            multas e sanções.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Optimização de Recursos:
                            </span>{" "}
                            Identificação de redundâncias e ineficiências que
                            podem ser corrigidas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Confiança Aumentada:
                            </span>{" "}
                            Sistemas auditados inspiram mais confiança de
                            clientes, investidores e parceiros.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Preparação para o Futuro:
                            </span>{" "}
                            Garantia de que os sistemas estão prontos para
                            atender às necessidades crescentes do mercado.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {isClicked === "Manutenção de Sistemas Informáticos" && (
                  <>
                    {" "}
                    <div>
                      <p className="text-blue-500 text-2xl font-bold mb-4">
                        Manutenção de Sistemas Informáticos
                      </p>
                      <p className="font-serif text-neutral-500">
                        A Manutenção de Sistemas Informáticos é um serviço
                        estratégico oferecido pela{" "}
                        <span className="text-blue-500">Systems Manager</span>,
                        voltado para assegurar o desempenho contínuo e confiável
                        das infraestruturas de TI das empresas. Este serviço
                        visa prevenir falhas, otimizar processos e garantir a
                        disponibilidade dos sistemas, permitindo que as
                        organizações se concentrem em suas operações principais
                        sem interrupções tecnológicas.
                      </p>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Descrição do Serviço
                      </p>
                      <p className="font-serif text-neutral-500">
                        O serviço de Manutenção de Sistemas Informáticos da{" "}
                        <span className="text-blue-500">Systems Manager</span>{" "}
                        inclui uma ampla gama de atividades que cobrem desde o
                        suporte preventivo até a resolução de problemas
                        emergenciais:
                      </p>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          a) Manutenção Preventiva:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Inspeções regulares para identificar e corrigir
                            problemas antes que afetem a operação.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Atualizações de software e firmware para garantir a
                            compatibilidade e a segurança.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          b) Manutenção Corretiva:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Solução rápida e eficaz de problemas técnicos,
                            reduzindo o tempo de inatividade.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          c) Monitoramento Contínuo:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Uso de ferramentas avançadas para monitorar o
                            desempenho dos sistemas em tempo real e detectar
                            anomalias.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          d) Gestão de Atualizações:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Planejamento e execução de atualizações de sistemas,
                            aplicativos e drivers, minimizando interrupções nas
                            operações.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          e) Optimização de Sistemas:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Identificação e implementação de melhorias para
                            aumentar a eficiência e a velocidade dos sistemas.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          f) Suporte Técnico Personalizado:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Atendimento dedicado para resolução de dúvidas e
                            problemas específicos dos clientes.
                          </li>
                        </ul>
                      </div>
                      <div className="font-serif text-neutral-500 mt-4">
                        <span className="text-blue-500">
                          g) Backup e Recuperação de Dados:
                        </span>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            Configuração de sistemas de backup e estratégias de
                            recuperação para proteger dados críticos contra
                            perdas.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Diferenciais do Serviço
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Equipe Altamente Qualificada:
                            </span>{" "}
                            Profissionais especializados em diversas áreas de
                            TI, garantindo suporte técnico de alto nível.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">Proatividade:</span>{" "}
                            Identificação de riscos e ações preventivas para
                            evitar problemas futuros.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Flexibilidade:
                            </span>{" "}
                            Serviços adaptados às necessidades e infraestrutura
                            de cada cliente, com contratos de manutenção
                            personalizados.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Disponibilidade Garantida:
                            </span>{" "}
                            Suporte técnico disponível para minimizar impactos
                            em caso de emergências.
                          </li>
                        </ul>
                      </div>
                      <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                        Benefícios para os Clientes
                      </p>
                      <div className="font-serif text-neutral-500">
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Redução de Custos:
                            </span>{" "}
                            Evita reparos caros e perdas financeiras causadas
                            por falhas nos sistemas.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Desempenho Optimizado:
                            </span>{" "}
                            Sistemas mais rápidos, eficientes e confiáveis,
                            aumentando a produtividade.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Segurança Reforçada:
                            </span>{" "}
                            Proteção contra ameaças cibernéticas por meio de
                            atualizações e monitoramento constante.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Maior Vida Útil dos Sistemas:
                            </span>{" "}
                            A manutenção regular prolonga a durabilidade do
                            hardware e do software.
                          </li>
                        </ul>
                        <ul className="pl-5 list-square space-y-1 mt-1">
                          <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                            <span className="text-blue-500">
                              Foco nas Atividades Principais:
                            </span>{" "}
                            Reduz a preocupação com problemas de TI, permitindo
                            que os clientes se concentrem em suas operações
                            estratégicas.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
