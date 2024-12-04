import Image from "next/image";
import type React from "react";
import { Typography } from "@/typography";
import { Linkedin, Instagram } from "lucide-react"; // Ícones da biblioteca lucide-react
import { Youtube } from "lucide-react"; // Ícone do YouTube
import logo from "@/assets/images/logo.svg"; // Logo importado da pasta assets

const menus = [
  {
    title: "Serviços",
    submenus: [
      { title: "Relatórios de Conformidade", href: "#" },
      { title: "Gestão de Incidentes de Dados", href: "#" },
      { title: "Treinamentos e Capacitação", href: "#" },
    ],
  },
  {
    title: "Soluções",
    submenus: [
      { title: "Consultoria para Empresas", href: "#" },
      { title: "Gestão de Riscos de Dados", href: "#" },
      { title: "Auditoria de Proteção de Dados", href: "#" },
      { title: "Mapeamento de Dados Pessoais", href: "#" },
    ],
  },
  {
    title: "Mais",
    submenus: [
      { title: "Blog", href: "#" },
      { title: "Sobre Nós", href: "#" },
      { title: "Contato", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="h-full">
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:items-start items-center">
            {/* Logo */}
            <Image src={logo} alt="DPOhub" width={210} height={61} />

            {/* Redes sociais */}
            <div className="md:mr-8 lg:mt-10 flex gap-2 mt-4 lg:mr-80 fill-slice-text items-center justify-center">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2] text-transparent p-2 rounded-md">
                  <Linkedin
                    className="h-full w-full text-white"
                    strokeWidth={1.5}
                  />{" "}
                  {/* Ícone do LinkedIn */}
                </div>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2] text-transparent p-2 rounded-md">
                  <Youtube
                    className="h-full w-full text-white"
                    strokeWidth={1.5}
                  />{" "}
                  {/* Ícone do YouTube */}
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 w-10 bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2] text-transparent p-2 rounded-md">
                  <Instagram
                    className="h-full w-full text-white"
                    strokeWidth={1.5}
                  />{" "}
                  {/* Ícone do Instagram */}
                </div>
              </a>
            </div>
          </div>

          {/* Menus */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12 mt-8 lg:mt-0">
            {menus.map((menu) => (
              <div className="flex flex-col" key={menu.title}>
                <Typography
                  variant="body"
                  className="text-primary text-sm font-semibold"
                >
                  {menu.title}
                </Typography>

                <ul className="text-sm text-slice-text gap-2 flex flex-col mt-4">
                  {menu.submenus.map((submenu) => (
                    <li key={submenu.title}>
                      <a href={submenu.href}>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Menus Responsivos */}
          <div className="lg:hidden mt-8 grid gap-12">
            {menus.map((menu) => (
              <div className="flex flex-col" key={menu.title}>
                <Typography
                  variant="body"
                  className="text-primary text-sm font-semibold"
                >
                  {menu.title}
                </Typography>

                <ul className="text-sm text-slice-purple gap-2 flex flex-col mt-4">
                  {menu.submenus.map((submenu) => (
                    <li key={submenu.title}>
                      <a href={submenu.href}>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-slice-purple text-xs border-t border-slice-line pt-4 -pb-4 mt-20">
          <div className="container flex justify-between mx-auto flex-col lg:flex-row px-4 lg:px-0">
            <Typography variant="body" className="text-slice-purple lg:text-xs">
              © Copyright 2024, Todos os Direitos Reservados pela DPOhub -
              Projeto de Desenvolvimento WEB
            </Typography>
            <ul className="font-semibold flex items-center gap-4 mt-4 sm:mt-10 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2]"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2]"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2]"
                >
                  Código de Conduta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
