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
          <NavbarItem isActive>
            <Link href="#">Início</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Serviços
            </Link>
          </NavbarItem>

          {/* <NavbarItem>
            <Link color="foreground" href="#">
              Portfolio
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link color="foreground" href="#">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contactos
            </Link>
          </NavbarItem>
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
