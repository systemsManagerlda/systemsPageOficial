import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { useFiltro } from "./FiltroPage";

export const HeaderPageCursos = () => {
  const { filtroText, setFiltroText } = useFiltro();
  return (
    <>
      <header className="bg-transparent shadow border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Título do Dashboard */}
            {/* <h1 className="text-2xl font-bold text-white">Cursos</h1> */}

            {/* Barra de Pesquisa */}
            <div className="hidden sm:flex flex-1 max-w-lg mx-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosSearch 
                    className="h-5 w-5 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Pesquisar curso..."
                  value={filtroText}
                  onChange={(e)=> setFiltroText(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Ícone de Notificações e Menu do Usuário */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">Ver notificações</span>
                <FaRegBell className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Menu do Usuário */}
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Abrir menu do usuário</span>
                    <Image
                      src="/img/systemsLogo.png"
                      width={25}
                      height={25}
                      sizes="36x36"
                      alt="Loading Light/Dark Toggle"
                      priority={false}
                      title="Loading Light/Dark Toggle"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <a
                          href="/perfilEstudante"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Perfil
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Configurações
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <a
                          href="#"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Sair
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
