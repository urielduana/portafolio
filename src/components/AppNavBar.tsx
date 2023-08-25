import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { Menu } from "react-feather";

import VadoseLogo from "./VadoseLogo";

function AppNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="bg-surface-400 text-surface-100"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            className="sm:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            icon={<Menu />}
          />
          <NavbarBrand>
            <VadoseLogo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem isActive>
            <Link href="/">
              <p className="text-lg font-bold text-surface-100">Home</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#about">
              <p className="text-lg font-bold text-surface-100">About</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#projects">
              <p className="text-lg font-bold text-surface-100">Projects</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#contact">
              <p className="text-lg font-bold text-surface-100">Contact</p>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-surface-400">
          <NavbarMenuItem>
            <Link href="/" onPress={() => setIsMenuOpen(false)}>
              <p className="text-lg font-bold text-surface-100">Home</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/#about" onPress={() => setIsMenuOpen(false)}>
              <p className="text-lg font-bold text-surface-100">About</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/#projects" onPress={() => setIsMenuOpen(false)}>
              <p className="text-lg font-bold text-surface-100">Projects</p>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/#contact" onPress={() => setIsMenuOpen(false)}>
              <p className="text-lg font-bold text-surface-100">Contact</p>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default AppNavBar;
