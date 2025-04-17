import ThemeSwisher from "./ThemeSwitch";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
export const HeaderPage = () => {
  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <Image
            src="/img/systemsLogo.png"
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" className="hover:text-white">
              Início
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/servicos" className="hover:text-white">
              Serviços
            </Link>
          </NavbarItem>

          {/* <NavbarItem>
            <Link color="foreground" href="#">
              Portfolio
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link href="/sobre" className="hover:text-white">
              Sobre Nós
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contactos" className="hover:text-white">
              Contactos
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link href="/cursos" className="hover:text-white">
              Cursos
            </Link>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <Button as={Link} color="primary" href="#" variant="bordered">
            Portfolio
          </Button>
          {/* <NavbarItem>{<ThemeSwisher />}</NavbarItem> */}
        </NavbarContent>
      </Navbar>
    </>
  );
};
