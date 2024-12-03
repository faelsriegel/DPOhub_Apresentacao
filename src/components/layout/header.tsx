"use client"; // Habilita a renderização no cliente (necessário em aplicações React com Next.js).

import Link from "next/link"; // Importa o componente Link para navegação entre páginas no Next.js.
import * as React from "react"; // Importa o React para criar componentes.

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Importa componentes de navegação do menu.
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Importa componentes de menu lateral para dispositivos móveis.

import { cn } from "@/lib/utils"; // Função auxiliar para combinar classes CSS.
import Image from "next/image"; // Componente para otimizar e renderizar imagens no Next.js.

import logo from "@/assets/images/logo.svg"; // Importa o logo da aplicação.
import { Button } from "@/components/ui/button"; // Importa o componente de botão.
import { HamburgerMenuIcon } from "@radix-ui/react-icons"; // Importa ícones para o menu responsivo.

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Relatórios de Conformidade", // Título do item.
    href: "#", // Link do item (atualmente um link vazio).
    description:
      "Gere relatórios detalhados sobre o status da conformidade da sua empresa com a LGPD.", // Descrição exibida no submenu.
  },
  {
    title: "Gestão de Incidentes",
    href: "#",
    description:
      "Acompanhe e resolva incidentes relacionados à proteção de dados com eficiência.",
  },
  {
    title: "Treinamentos de LGPD",
    href: "#",
    description:
      "Ofereça treinamentos personalizados para capacitar sua equipe em privacidade e proteção de dados.",
  },
  {
    title: "Análise de Riscos",
    href: "#",
    description:
      "Identifique e mitigue riscos potenciais à segurança dos dados na sua organização.",
  },
  {
    title: "Mapeamento de Dados",
    href: "#",
    description:
      "Crie um inventário detalhado dos dados pessoais processados pela sua empresa.",
  },
  {
    title: "Consultoria DPO",
    href: "#",
    description:
      "Receba suporte especializado em gestão de privacidade e conformidade.",
  },
];

const menuSections = [
  {
    title: "Serviços", // Nome do menu principal.
    submenu: components, // Submenu associado ao menu principal.
  },
  {
    title: "Plataforma", // Outro item de menu principal.
    href: "#", // Link para o item (atualmente um link vazio).
  },
  {
    title: "Casos de Sucesso",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Contato",
    href: "#",
  },
];

// Componente Header (cabeçalho principal da página).
export const Header = () => {
  return (
    <div className="px-12 lg:px-32 pt-2 flex justify-between items-center">
      {/** Logo da aplicação */}
      <div>
        <Image src={logo} alt="DPOhub" width={100} height={100} />
      </div>

      {/** Menu principal para telas grandes */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="text-gray-700 dark:text-gray-300">
          {menuSections.map((section) =>
            section.submenu ? (
              <NavigationMenuItem key={section.title}>
                <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>{" "}
                {/* Gatilho para abrir o submenu */}
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {section.submenu.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}{" "}
                        {/* Descrição exibida no submenu */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={section.title}>
                <Link href={section.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {section.title} {/* Item sem submenu */}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/** Ações e menu responsivo */}
      <div className="flex items-center gap-4">
        {/** Menu lateral para dispositivos móveis */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="lg:hidden p-2 border rounded-lg">
              <HamburgerMenuIcon /> {/* Ícone do menu hamburguer */}
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white dark:bg-gray-900">
            <ul className="flex flex-col gap-4">
              {menuSections.map((section) => (
                <li
                  className="text-md font-semibold text-gray-700 dark:text-gray-300"
                  key={`responsive-${section.title}`}
                >
                  {section.title}
                  {section?.submenu && (
                    <ul>
                      {section?.submenu?.map((component) => (
                        <a
                          key={`responsive-${component.title}`}
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300">
                            {component.title}
                          </div>
                        </a>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        {/** Botão principal para ação */}
        <Link href="/login" passHref>
          <Button variant="gradient" size="default">
            Acessar Conta
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Componente de lista para itens do submenu.
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"; // Define o nome do componente para melhor depuração.

export default Header;
