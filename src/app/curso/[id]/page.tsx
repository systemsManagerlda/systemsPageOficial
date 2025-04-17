"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import LayoutPage from "../../components/LayoutPage";

const CursoPlayer = () => {
  const [videoAtual, setVideoAtual] = useState(0);

  const curso = {
    nome: "Desenvolvimento Web com Next.js",
    descricao:
      "Aprenda a construir aplicações web modernas e escaláveis utilizando Next.js e Tailwind CSS.",
    aulas: [
      {
        titulo: "Introdução ao Next.js",
        duracao: "10:30",
        url: "https://vimeo.com/1065748862/af32cf2eca?share=copy",
      },
      {
        titulo: "Estruturando um Projeto",
        duracao: "12:45",
        url: "https://vimeo.com/1065748862/af32cf2eca?share=copy",
      },
      {
        titulo: "Consumindo APIs",
        duracao: "15:20",
        url: "https://vimeo.com/1065748862/af32cf2eca?share=copy",
      },
    ],
  };
  return (
    <LayoutPage>
      <main className="flex-1 min-h-screen p-6 sm:ml-44">
        <div className="h-screen">
          <div className="flex flex-col md:flex-row h-screen">
            {/* Player de Vídeo */}
            <div className="flex-1 bg-black p-4 flex flex-col">
              <ReactPlayer
                url={curso.aulas[videoAtual].url}
                controls
                width="100%"
                height="500px"
                config={{
                  vimeo: {
                    playerOptions: {
                      // Remove o botão de compartilhamento
                      transparent: true,
                      controls: true,
                      sharing: false,
                    },
                  },
                }}
              />
              <div className="text-white mt-4">
                <h2 className="text-2xl font-bold">
                  {curso.aulas[videoAtual].titulo}
                </h2>
                <p className="text-gray-400">{curso.descricao}</p>
              </div>
            </div>

            {/* Lista de Aulas */}
            <div className="w-full md:w-1/3 bg-gray-900 text-white overflow-y-auto p-4">
              <h3 className="text-xl font-semibold mb-4">Aulas do Curso</h3>
              <ul>
                {curso.aulas.map((aula, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-300 ${
                      videoAtual === index
                        ? "bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                    onClick={() => setVideoAtual(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <FaPlay className="text-gray-400" />
                      <span>{aula.titulo}</span>
                    </div>
                    <span className="text-gray-400">{aula.duracao}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </LayoutPage>
  );
};

export default CursoPlayer;
