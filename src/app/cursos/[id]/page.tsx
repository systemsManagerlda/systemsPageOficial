"use client";
import LayoutPage from "@/app/components/LayoutPage";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { courses } from "../../components/listaCursos";

export default function CursoDetalhes() {
  const [isClient, setIsClient] = useState(false);
  const { id } = useParams();

  // Garantir que o código só seja executado no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Verifica se estamos no lado do cliente
  if (!isClient) {
    return null; // Retorna nada durante o SSR
  }

  // Verifica se o 'id' está definido e é uma string
  if (!id || Array.isArray(id)) {
    return <p>Curso não encontrado.</p>;
  }

  // Encontrar o curso com o 'id' correspondente
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Curso não encontrado.</p>;
  }

  return (
    <>
      <LayoutPage>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {course.title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 mb-4">
            <div className="flex-1">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-white">{course.description}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <CiStar
                    key={index}
                    className={`h-5 w-5 ${
                      index < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-4">
                <h3 className="text-xl text-white">Conteúdo do Curso</h3>
              </div>
              <div className="mt-4">
                <span className="text-blue-600 font-bold">{course.price}</span>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: course.content }} />
        </div>
      </LayoutPage>
    </>
  );
}
