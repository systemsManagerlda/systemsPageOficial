"use client";
import React from "react";
import Link from "next/link";
import LayoutPage from "../components/LayoutPage";

const cursos = [
  {
    id: 1,
    nome: "Desenvolvimento Web com Next.js",
    duracao: "40 horas",
    progresso: 75,
    status: "Em andamento",
    descricao: "Aprenda a desenvolver aplicações web modernas com Next.js.",
    link: "/curso/1",
  },
  {
    id: 2,
    nome: "Tailwind CSS do Zero ao Avançado",
    duracao: "20 horas",
    progresso: 100,
    status: "Concluído",
    descricao: "Domine o Tailwind CSS e crie interfaces incríveis.",
    link: "/curso/2",
  },
];

const MeusCursos = () => {
  return (
    <LayoutPage>
      <main className="flex-1 min-h-screen p-6 sm:ml-44">
        <div className="h-screen">
            <div className="container mx-auto max-w-5xl">
              <h1 className="text-3xl font-bold text-blue-800 mb-6">
                Meus Cursos
              </h1>

              <div className="grid md:grid-cols-2 gap-6">
                {cursos.map((curso) => (
                  <div
                    key={curso.id}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {curso.nome}
                    </h2>
                    <p className="text-gray-600 mb-2">{curso.descricao}</p>
                    <p className="text-sm text-gray-500">
                      Duração: {curso.duracao}
                    </p>
                    <p
                      className={`text-sm font-bold ${
                        curso.status === "Concluído"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {curso.status}
                    </p>

                    {/* Barra de progresso */}
                    <div className="w-full bg-gray-300 h-2.5 rounded-full mt-3">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${curso.progresso}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Progresso: {curso.progresso}%
                    </p>

                    {/* Botão */}
                    <Link
                      href={curso.link}
                      className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Acessar Curso
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </main>
    </LayoutPage>
  );
};

export default MeusCursos;
