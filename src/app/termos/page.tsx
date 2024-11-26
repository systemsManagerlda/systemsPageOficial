"use client";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderPage } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Termos() {
  return (
    <>
      {" "}
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          {" "}
          <HeaderPage />
          <div className="bg-[url('/bgPages.jpg')] bg-cover bg-center flex items-center justify-center h-80">
            <h1 className="text-white text-4xl text-center font-sans font-semibold">
              Termos e Condições
            </h1>
          </div>
          <div className="container mx-auto px-8 mt-24">
            <div className="grid col-span-4 h-[550px] overflow-y-scroll">
              <div>
                <p className="text-blue-500 text-xl font-bold mb-4">
                  1. Introdução
                </p>
                <p className="font-serif text-neutral-500">
                  Estes Termos e Condições regulam o uso dos serviços oferecidos
                  pela <span className="text-blue-500">Systems Manager</span>,
                  com sede em Bairro do Aeroporto A, Rua do Camões - Cidade de
                  Maputo. Ao contratar os nossos serviços ou utilizar o nosso
                  software, o cliente concorda com os termos aqui estabelecidos.
                </p>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  2. Definições
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span className="text-blue-500">Cliente</span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Pessoa física ou jurídica que contrata os serviços da
                      Systems Manager.
                    </li>
                  </ul>
                </div>
                <div className="font-serif text-neutral-500 mt-4">
                  <span className="text-blue-500">Serviços</span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Todas as soluções fornecidas pela empresa, incluindo, mas
                      não limitado a, gestão empresarial, desenvolvimento de
                      software, auditoria de sistemas de informação, manutenção
                      de sistemas informáticos e design gráfico.
                    </li>
                  </ul>
                </div>
                <div className="font-serif text-neutral-500 mt-4">
                  <span className="text-blue-500">Sistemas Manager</span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Referência à nossa empresa, incluindo sua equipe e
                      colaboradores.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  3. Serviços Prestados
                </p>
                <div className="font-serif text-neutral-500">
                  <p>
                    A <span className="text-blue-500">Systems Manager</span>{" "}
                    oferece serviços personalizados nas seguintes áreas:
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Gestão empresarial.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Desenvolvimento de software.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Auditoria de sistemas de informação.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Manutenção de sistemas informáticos.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Design gráfico.
                    </li>
                  </ul>
                  <p>
                    Cada serviço é regido por um contrato específico, detalhando
                    escopo, cronograma, preços e condições de pagamento.
                  </p>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  4. Obrigações das Partes
                </p>
                <div className="font-serif text-neutral-500">
                  <p>
                    4.1. Obrigações da{" "}
                    <span className="text-blue-500">Systems Manager</span>{" "}
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Fornecer os serviços contratados de acordo com os padrões
                      de qualidade e dentro dos prazos estabelecidos.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Garantir a confidencialidade de todas as informações e
                      dados fornecidos pelo cliente.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Informar o cliente sobre qualquer alteração nos serviços
                      ou eventuais problemas.
                    </li>
                  </ul>
                </div>
                <div className="font-serif text-neutral-500">
                  <p>4.2. Obrigações do Cliente</p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Fornecer informações completas e precisas necessárias para
                      a execução dos serviços.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Efetuar os pagamentos nos prazos acordados.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Não compartilhar ou distribuir, sem autorização,
                      softwares, designs ou qualquer produto intelectual
                      fornecido pela{" "}
                      <span className="text-blue-500">Sistemas Manager</span>.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  5. Propriedade Intelectual
                </p>
                <div className="font-serif text-neutral-500">
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Todos os softwares, designs e materiais desenvolvidos pela{" "}
                      <span className="text-blue-500">Systems Manager</span>{" "}
                      permanecem como propriedade intelectual da empresa até o
                      pagamento integral do contrato.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      É proibida a reprodução, modificação ou distribuição dos
                      materiais fornecidos sem autorização prévia por escrito.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  6. Política de Pagamento
                </p>
                <div className="font-serif text-neutral-500">
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      O pagamento pelos serviços deve ser realizado conforme os
                      termos estabelecidos no contrato individual.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Atrasos superiores a 15 dias na quitação das faturas podem
                      resultar na suspensão dos serviços até a regularização.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  7. Confidencialidade
                </p>
                <div className="font-serif text-neutral-500">
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Ambas as partes concordam em manter sigilo sobre todas as
                      informações confidenciais trocadas durante a prestação dos
                      serviços. Este compromisso permanece válido mesmo após o
                      término do contrato.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  8. Garantias e Limitações de Responsabilidade
                </p>
                <div className="font-serif text-neutral-500">
                  A <span className="text-blue-500">Sistemas Manager</span>{" "}
                  compromete-se a realizar os serviços com diligência, mas não
                  se responsabiliza por:
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Perdas causadas por mau uso dos sistemas fornecidos.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Danos resultantes de ataques cibernéticos ou falhas
                      externas à empresa.
                    </li>
                  </ul>
                  <span>
                    O cliente é responsável por fazer backups de seus dados
                    regularmente.
                  </span>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  9. Rescisão de Contrato
                </p>
                <div className="font-serif text-neutral-500">
                  O contrato pode ser rescindido por ambas as partes nas
                  seguintes situações:
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Perdas causadas por mau uso dos sistemas fornecidos.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      <span className="text-blue-500">Pelo Cliente</span>:
                      Mediante aviso prévio de 30 dias e quitação de quaisquer
                      pendências financeiras.
                    </li>
                  </ul>
                  <span>
                    <span className="text-blue-500">Pela Systems Manager</span>:
                    Em caso de descumprimento dos Termos e Condições pelo
                    cliente ou não pagamento pelos serviços prestados.
                  </span>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  10. Alterações nos Termos e Condições
                </p>
                <div className="font-serif text-neutral-500">
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      A Systems Manager, Lda reserva-se o direito de alterar
                      estes Termos e Condições a qualquer momento. As alterações
                      serão comunicadas ao cliente com antecedência mínima de 30
                      dias.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  11. Foro e Legislação Aplicável
                </p>
                <div className="font-serif text-neutral-500">
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Estes Termos e Condições são regidos pela legislação da
                      República de Moçambique. Quaisquer disputas serão
                      resolvidas no foro da comarca onde a{" "}
                      <span className="text-blue-500">Sistemas Manager</span>{" "}
                      está sediada.
                    </li>
                  </ul>
                  <p className="mt-4">
                    A aceitação destes Termos e Condições é indispensável para o
                    uso dos serviços e produtos fornecidos pela{" "}
                    <span className="text-blue-500">Sistemas Manager</span>. Ao
                    contratar os nossos serviços, você concorda com todos os
                    itens descritos acima.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </NextUIProvider>
    </>
  );
}
