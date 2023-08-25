import { Button, Link } from "@nextui-org/react";
import { GitHub, Instagram, Linkedin, Phone } from "react-feather";
import VadoseLogo from "./VadoseLogo";

export default function AppFooter() {
  return (
    <footer className="bg-surface-400 text-surface-100 py-12 px-20">
      {/* Content */}
      <div className="flex flex-wrap justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-vadose-200 text-2xl font-bold">
            <VadoseLogo size={64} />
          </Link>
        </div>
        <div className="flex flex-wrap">
          {/* Navigation */}
          <div className="flex flex-col gap-5 mx-10 my-5">
            <Link href="/" className="text-vadose-200 text-2xl font-bold">
              Home
            </Link>
            <Link href="/#about" className="text-surface-100 text-lg font-thin">
              About
            </Link>
            <Link
              href="/#projects"
              className="text-surface-100 text-lg font-thin"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-surface-100 text-lg font-thin"
            >
              Contact
            </Link>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-5 mx-10 my-5">
            <Link href="#" className="text-vadose-200 text-2xl font-bold">
              Contact me
            </Link>
            <Link
              href="tel:+5214424795960"
              isExternal
              className="text-surface-100 text-lg font-thin"
            >
              Phone
            </Link>
            <Link
              href="mailto:uriel.duanachavez@hotmail.com"
              isExternal
              className="text-surface-100 text-lg font-thin"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/urielduana/"
              isExternal
              className="text-surface-100 text-lg font-thin"
            >
              LinkedIn
            </Link>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-5 mx-10 my-5">
            <Link href="#" className="text-vadose-200 text-2xl font-bold">
              Social
            </Link>
            {/* Logos */}
            <div className="flex gap-4 flex-wrap">
              <Link href="https://www.linkedin.com/in/urielduana/" isExternal>
                <Button
                  isIconOnly
                  variant="faded"
                  aria-label="Take a photo"
                  className="bg-vadose-100  border-0"
                >
                  <Linkedin size={32} color="white" />
                </Button>
              </Link>
              <Link href="https://github.com/urielduana" isExternal>
                <Button
                  isIconOnly
                  variant="faded"
                  aria-label="Take a photo"
                  className="bg-vadose-100  border-0"
                >
                  <GitHub size={32} color="white" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/uduana25/" isExternal>
                <Button
                  isIconOnly
                  variant="faded"
                  aria-label="Take a photo"
                  className="bg-vadose-100  border-0"
                >
                  <Instagram size={32} color="white" />
                </Button>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5214424795960&text=Hi!!!👋👋%0AI%20saw%20your%20website%20and%20I%20want%20to%20contact%20to..."
                isExternal
              >
                <Button
                  isIconOnly
                  variant="faded"
                  aria-label="Take a photo"
                  className="bg-vadose-100  border-0"
                >
                  <Phone size={32} color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-surface-200 text-lg font-thin mt-5">
        © 2023 Vadose | Uriel Duana
      </div>
    </footer>
  );
}
