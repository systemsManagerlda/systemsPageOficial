import Image from "next/image";
import { BackgroundBeamsWithCollision2 } from "./ui/background-beams-with-collision2";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

export const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <>
      <div className="mt-24 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full h-0.5 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px]  blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px " />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />

          {/* Core component */}

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <BackgroundBeamsWithCollision2>
        <div className="text-neutral-300 bg-[url('/footer.png')] bg-cover bg-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-12">
            <div className="flex flex-col gap-4">
              <div>
                <Image
                  src="/img/systemsLogo.png"
                  width={50}
                  height={50}
                  sizes="50x50"
                  alt="Loading Light/Dark Toggle"
                  priority={false}
                  title="Loading Light/Dark Toggle"
                />
              </div>
              <div>
                <small className="text-justify">
                  A Systems Manager é uma empresa voltada ao desenvolvimento de
                  Softwares, tendo como foco Softwares de Gestão empresarial
                  ERP, com vista a apresentar soluções, digitalizando processos
                  operacionais e disponibilizando ferramentas de gerenciamento
                  para a tomada de decisões de forma rápida, assertiva e rápida.
                  Os nossos Softwares são desenvolvidos com alta Engenharia de
                  programação, contribuindo assim, para a melhoria da gestão e
                  controle das pequenas, médias e grandes Empresa.
                </small>
              </div>
              <div className="flex flex-row gap-2">
                <a href="https://twitter.com/systems_lda">
                  <FaTwitter className="cursor-pointer hover:text-blue-500" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100088889980145">
                  <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com/systems_manager_lda/">
                  <FaInstagram className="cursor-pointer hover:text-blue-500" />
                </a>
                <a href="https://wa.link/fbohza">
                  <FaWhatsapp className="cursor-pointer hover:text-blue-500" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-serif text-blue-500 font-bold">
                Links
              </h3>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  <Link href="/"> Início</Link>
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  <Link href="/sobre">Sobre-nós</Link>
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  <Link href="/servicos"> Serviços</Link>
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  <Link href="/termos"> Termos e Condições</Link>
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  <Link href="/politicas">Politicas de Privacidade</Link>
                </small>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-serif text-blue-500 font-bold">
                Nossos Serviços
              </h3>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Gestão Empresarial
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Desenvolvimento de Softwares
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Desaign Gráfico
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Auditoria de Sistemas de Informação
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Manutenção de Sistemas Informáticos
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
                  Formações e Capacitações
                </small>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-serif text-blue-500 font-bold">
                Contacte-nos
              </h3>
              <div>
                <small className="flex flex-row gap-2 items-center">
                  <FaLocationDot />
                  Bairro do Aeroporto A, Rua do Camões - Cidade de Maputo
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center">
                  <FaPhoneAlt />
                  +258 82 803 3083 | +258 86 228 8823
                </small>
              </div>
              <div>
                <small className="flex flex-row gap-2 items-center">
                  <MdAlternateEmail />
                  <p>
                    <a href="mailto:info@systemsmanager.co.mz">
                      info@systemsmanager.co.mz
                    </a>
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div className="text-center mb-8">
            {ano}&copy; Copyright{" "}
            <strong>
              <span className="text-blue-500">Systems Manager, Lda.</span>
            </strong>{" "}
            Todos direitos reservados
          </div>
        </div>
      </BackgroundBeamsWithCollision2>
    </>
  );
};
