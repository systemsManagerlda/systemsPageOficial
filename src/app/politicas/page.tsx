"use client";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderPage } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Politicas() {
  return (
    <>
      {" "}
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          {" "}
          <HeaderPage />
          <div className="bg-[url('/bgPages.jpg')] bg-cover bg-center flex items-center justify-center h-80">
            <h1 className="text-white text-4xl text-center font-sans font-semibold">
              Políticas de Privacidade
            </h1>
          </div>
          <div className="container mx-auto px-8 mt-24">
            <div className="grid col-span-4 h-[550px] overflow-y-scroll">
              <div>
                <p className="text-blue-500 text-xl font-bold mb-4">
                  1. Introdução
                </p>
                <p className="font-serif text-neutral-500">
                  A <span className="text-blue-500">Systems Manager</span>, tem
                  um compromisso sólido com a proteção da privacidade e
                  segurança dos dados pessoais de seus clientes, parceiros e
                  visitantes de suas plataformas digitais. Esta política detalha
                  como coletamos, usamos, armazenamos e protegemos suas
                  informações.
                </p>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  2. Coleta de Dados
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Podemos coletar as seguintes informações pessoais de forma
                    direta ou indireta:
                  </span>
                  <p>
                    <span className="text-blue-500">
                      a) Informações fornecidas pelo cliente:
                    </span>
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Nome, endereço, e-mail, número de telefone e outros dados
                      de contato.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Informações financeiras ou bancárias para efetuação de
                      pagamentos.
                    </li>
                  </ul>
                  <p>
                    <span className="text-blue-500">
                      b) Informações coletadas automaticamente:
                    </span>
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Dados de navegação, como endereço IP, tipo de navegador,
                      tempo de acesso e páginas visitadas.
                    </li>
                  </ul>
                  <p>
                    <span className="text-blue-500">
                      c) Informações de terceiros:
                    </span>
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Dados fornecidos por parceiros ou fontes públicas, desde
                      que estejam em conformidade com a legislação aplicável.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  3. Uso dos Dados
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Utilizamos as informações pessoais coletadas para as
                    seguintes finalidades:
                  </span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Prestação e personalização dos serviços contratados.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Comunicação com os clientes sobre atualizações, ofertas e
                      informações relevantes.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Melhorar a experiência do usuário em nossas plataformas.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Cumprir obrigações legais e regulatórias.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Garantir a segurança das informações e prevenir fraudes.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  4. Compartilhamento de Dados
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Utilizamos as informações pessoais coletadas para as
                    seguintes finalidades:
                  </span>
                  <p>
                    A <span className="text-blue-500">Systems Manager</span> não
                    vende, aluga ou compartilha dados pessoais com terceiros,
                    exceto nos seguintes casos:
                  </p>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      <span className="text-blue-500">
                        Prestadores de serviços:
                      </span>{" "}
                      Empresas contratadas para apoiar na execução de serviços,
                      como hospedagem de dados e suporte técnico.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      <span className="text-blue-500">Requisitos legais:</span>{" "}
                      Quando exigido por lei, ordem judicial ou regulação
                      governamental.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      <span className="text-blue-500">
                        Consentimento do cliente:
                      </span>{" "}
                      Caso o cliente autorize explicitamente o compartilhamento.
                    </li>
                  </ul>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  5. Armazenamento e Proteção de Dados
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Tomamos medidas rigorosas para proteger os dados pessoais de
                    acessos não autorizados, uso indevido ou divulgação:
                  </span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Uso de criptografia e tecnologias de segurança.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Restrição de acesso aos dados apenas às equipes
                      autorizadas.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Implementação de backups regulares e sistemas de
                      recuperação de desastres.
                    </li>
                  </ul>
                  <span>
                    Os dados serão armazenados pelo período necessário para
                    cumprir as finalidades descritas nesta política ou conforme
                    exigido por lei.
                  </span>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  6. Direitos dos Titulares dos Dados
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Os titulares dos dados pessoais possuem os seguintes
                    direitos, conforme a legislação aplicável:
                  </span>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Acessar os dados pessoais que mantemos sobre você.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Solicitar a correção de informações incorretas ou
                      incompletas.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Solicitar a exclusão dos dados, salvo quando necessários
                      para cumprimento de obrigações legais.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Restringir ou opor-se ao processamento de seus dados.
                    </li>
                  </ul>
                  <ul className="pl-5 list-square space-y-1 mt-1">
                    <li className="italic relative before:content-['•'] before:absolute before:-left-5 before:text-neutral-500">
                      Solicitar a portabilidade de seus dados para outro
                      fornecedor de serviços.
                    </li>
                  </ul>
                  <span>
                    Para exercer qualquer um desses direitos, entre em contato
                    conosco por meio dos canais indicados nos Contactos.
                  </span>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  7. Cookies e Tecnologias Semelhantes
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    Nossas plataformas utilizam cookies e outras tecnologias
                    para melhorar a experiência do usuário. Você pode gerenciar
                    as preferências de cookies em seu navegador. Note que a
                    desativação de certos cookies pode impactar a funcionalidade
                    do site.
                  </span>
                </div>
                <p className="text-blue-500 text-xl font-bold mt-4 mb-2">
                  9. Atualizações desta Política
                </p>
                <div className="font-serif text-neutral-500 mt-4">
                  <span>
                    A <span className="text-blue-500">Systems Manager</span>{" "}
                    reserva-se o direito de atualizar esta Política de
                    Privacidade periodicamente. As alterações serão comunicadas
                    aos clientes através de nossos canais oficiais.
                  </span>
                  <p>
                    A continuação do uso de nossos serviços após tais alterações
                    constitui sua aceitação dos termos revisados.
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
