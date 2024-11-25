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
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
