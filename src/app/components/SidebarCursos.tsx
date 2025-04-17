"use client";

import { useState } from "react";

import Link from "next/link";
import { MdHome, MdOutlineClose } from "react-icons/md";
import { FaArrowLeft, FaBars, FaBookOpen, FaUser } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
  {/* Sidebar */}
  <div className={`bg-transparent text-white w-44 min-h-screen p-5 fixed top-0 left-0 transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-64"} sm:translate-x-0`}>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-bold">Cursos</h1>
      <button className="sm:hidden text-white" onClick={() => setIsOpen(false)}>
        <MdOutlineClose className="w-6 h-6" />
      </button>
    </div>

    {/* Navegação */}
    <nav className="space-y-4">
      <Link href="/cursos" className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700/15 transition text-sm">
        <MdHome className="w-4 h-4" />
        <span>Início</span>
      </Link>
      <Link href="/meusCursos" className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700/15 transition text-sm">
        <FaBookOpen className="w-4 h-4" />
        <span>Meus Cursos</span>
      </Link>
      <Link href="/categorias" className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700/15 transition text-sm">
        <FaBookOpen className="w-4 h-4" />
        <span>Categorias</span>
      </Link>
      <Link href="/perfilEstudante" className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-700/15 transition text-sm">
        <FaUser className="w-4 h-4" />
        <span>Perfil</span>
      </Link>
    </nav>
  </div>


</div>

  );
}
