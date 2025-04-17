"use client";
import LayoutPage from "../components/LayoutPage";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { courses } from "../components/listaCursos";
import { useFiltro } from "../components/FiltroPage";

export default function Cursos() {
  const { filtroText } = useFiltro();
  const router = useRouter();
  // Função para navegar para a página do curso
  const navigateToCourseDetails = (courseId: number) => {
    router.push(`/cursos/${courseId}`); // Navega para a página de detalhes do curso com o ID do curso
  };
  const elementosFiltrados = courses.filter((item) =>
    item.title.toLowerCase().includes(filtroText.toLowerCase())
  );
  return (
    <>
      <LayoutPage>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Cursos Disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {elementosFiltrados.map((course) => (
              <div
                key={course.id}
                className="bg-black shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="text-blue-600 text-sm mt-2">
                    {course.description}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <CiStar
                        key={index}
                        className={`h-5 w-5 ${
                          index < (course.rating || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold">
                      {course.price}
                    </span>
                    <button
                      onClick={() => navigateToCourseDetails(course.id)}
                      className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition"
                    >
                      Ver Curso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutPage>
    </>
  );
}
