import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

export const MAP = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="font-serif font-bold text-3xl text-blue-500 text-center py-10">
        <p>Contactos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <IoMdPin className="h-10 w-10" />
              <div className="flex flex-col">
                <p className="text-md">Endereço</p>
                <p className="text-small text-default-500">
                  Systems Manager, Lda.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Bairro do Aeroporto A, Rua do Camões - Cidade de Maputo</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal href="#">
                Escritório principal
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <FaPhoneAlt className="h-10 w-10" />
              <div className="flex flex-col">
                <p className="text-md">Telemóvel</p>
                <p className="text-small text-default-500">
                  Systems Manager, Lda.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>+258 82 803 3083</p>
              <p>+258 86 228 8823</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal href="#">
                Disponível apenas no horário de trabalho
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <MdOutlineAlternateEmail className="h-10 w-10" />
              <div className="flex flex-col">
                <p className="text-md">E-mail</p>
                <p className="text-small text-default-500">
                  Systems Manager, Lda.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                <a href="mailto:info@systemsmanager.co.mz">
                  info@systemsmanager.co.mz
                </a>
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal href="#">
                Respondemos dentro de 48 horas
              </Link>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <FaRegCalendarAlt className="h-10 w-10" />
              <div className="flex flex-col">
                <p className="text-md">Horário</p>
                <p className="text-small text-default-500">
                  Systems Manager, Lda.
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Segunda à Sexta - 08:00h | 17:00h</p>
              <p>Sábado - 08:00h | 14:00h</p>
              <p>Domingo - Encerrado</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal href="#">
                24/24 para atendimento ao cliente
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.4702917461452!2d32.573117069627784!3d-25.932735109969894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a8fc5b31d45%3A0x2d25c08f61c3b712!2sR.%20de%20Cam%C3%B5es%2C%20Maputo!5e0!3m2!1spt-PT!2smz!4v1731732879668!5m2!1spt-PT!2smz"
            width="100%"
            height="450"
            style={{ border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
