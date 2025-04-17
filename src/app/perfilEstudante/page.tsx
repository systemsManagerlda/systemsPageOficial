import React from "react";
import LayoutPage from "../components/LayoutPage";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PerfilEstudante = () => {
  // Dados do estudante (em um projeto real, esses dados viriam de uma API ou banco de dados)
  const estudante = {
    nome: "João Silva",
    curso: "Desenvolvimento Web com Next.js",
    foto: "/cursos/profilePic.png",
    email: "joao.silva@email.com",
    descricao: "Desenvolvedor web apaixonado por criar soluções rápidas e eficientes.",
    dataConclusao: "12/03/2025",
    habilidades: [
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
      "APIs RESTful",
      "Git e GitHub",
    ],
    cursosConcluidos: [
      { nome: "HTML & CSS Básico", duracao: "40 horas" },
      { nome: "JavaScript Avançado", duracao: "50 horas" },
      { nome: "Banco de Dados com SQL", duracao: "35 horas" },
    ],
    cursosNaoConcluidos: [
      { nome: "Next.js Completo", duracao: "Em andamento (60%)" },
      { nome: "React Native para Mobile", duracao: "Em andamento (30%)" },
    ],
    projetos: [
      {
        nome: "Sistema de Blog",
        descricao: "Aplicação de blog com login, postagem e comentários, construída com Next.js e MongoDB.",
        link: "https://github.com/joaosilva/blog-system",
      },
      {
        nome: "To-Do List",
        descricao: "Lista de tarefas com funcionalidade de adicionar, editar e excluir, usando React.js.",
        link: "https://github.com/joaosilva/todo-list",
      },
    ],
    redesSociais: {
      github: "https://github.com/joaosilva",
      linkedin: "https://linkedin.com/in/joaosilva",
    },
  };

  return (
    <LayoutPage>
      {/* Conteúdo Principal */}
      <main className="flex-1 min-h-screen p-6 sm:ml-44">
        <div className="h-screen">
          <Card className="max-w-full bg-blue-900/30 p-4 shadow-lg rounded-lg">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={100}
                radius="lg"
                src="/cursos/profilePic.png"
                width={100}
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">{estudante.nome}</h2>
                <p className="text-gray-600">{estudante.curso}</p>
                <p className="text-sm text-gray-500">
                  Conclusão: {estudante.dataConclusao}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
          <h3 className="text-lg font-semibold mb-2">Sobre mim</h3>
          <p className="text-gray-300 mb-4">{estudante.descricao}</p>

          {/* Habilidades */}
          <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {estudante.habilidades.map((habilidade, index) => (
              <li key={index}>{habilidade}</li>
            ))}
          </ul>

          {/* Cursos Concluídos */}
          <h3 className="text-lg font-semibold mb-2">Cursos Concluídos</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {estudante.cursosConcluidos.map((curso, index) => (
              <li key={index}>
                <span className="font-medium">{curso.nome}</span> - {curso.duracao}
              </li>
            ))}
          </ul>

          {/* Cursos em Andamento */}
          <h3 className="text-lg font-semibold mb-2">Cursos em Andamento</h3>
          <ul className="list-none text-gray-300 mb-4">
            {estudante.cursosNaoConcluidos.map((curso, index) => (
              <li key={index} className="mb-2">
                <p className="font-medium">{curso.nome}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: (curso.duracao.match(/\d+/)?.[0] || "0") + "%" }} // Pegando percentual do texto
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{curso.duracao}</p>
              </li>
            ))}
          </ul>

          {/* Projetos */}
          <h3 className="text-lg font-semibold mb-2">Projetos</h3>
          <div className="space-y-3">
            {estudante.projetos.map((projeto, index) => (
              <div key={index} className="border p-3 rounded-lg">
                <h4 className="font-semibold">{projeto.nome}</h4>
                <p className="text-sm text-gray-300">{projeto.descricao}</p>
                <a href={projeto.link} target="_blank" className="text-blue-500 text-sm">Ver no GitHub</a>
              </div>
            ))}
          </div>
        </CardBody>
            <Divider />
            <CardFooter className="flex flex-col items-center">
              <p className="text-gray-300">Email: {estudante.email}</p>
              <div className="flex gap-4 mt-3">
                <a
                  href={estudante.redesSociais.github}
                  target="_blank"
                  className="text-gray-600 hover:text-black"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={estudante.redesSociais.linkedin}
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </LayoutPage>
  );
};

export default PerfilEstudante;
