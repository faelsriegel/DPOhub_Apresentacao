import type React from "react"; // Importa o tipo React para definir o componente como React.FC

import { Button } from "@/components/ui/button"; // Importa o componente de botão
import { Typography } from "@/typography"; // Importa o componente tipográfico

import { Hero as HeroFC } from "@/components/layout/hero"; // Importa o componente de layout Hero

// Componente Hero
// Representa a seção de destaque da landing page
export const Hero: React.FC = () => {
  return (
    <HeroFC>
      {/** Container principal do Hero */}
      <div className="flex justify-center h-full flex-col text-center w-full items-center">
        {/** Título principal (h1) */}
        <Typography
          as="h1" // Renderiza o componente como um elemento <h1>
          className="
       text-primary 
        font-regular 
        text-[32px] leading-[38px] 
        lg:text-[38px] lg:leading-[42px] 
        lg-xl:text-[42px] lg-xl:leading-[48px] 
        xl:text-[65px] xl:leading-[70px]
"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#7FD9D2]">
            Transforme
          </span>{" "}
          a Gestão <br />
          da LGPD em sua Empresa
        </Typography>
        {/** Subtítulo ou mensagem complementar */}
        <Typography
          as="p" // Renderiza como <p>
          variant="body" // Variante de estilo configurada para textos
          className="text-primary font-bold mt-8" // Adiciona espaçamento superior
        >
          Gerenciamento total com eficiência
        </Typography>
        {/** Descrição detalhada do Hero */}
        <Typography
          as="p" // Renderiza como <p>
          variant="body" // Variante de estilo configurada para descrições
          className="max-w-[400px] mt-4 text-sm" // Define largura máxima e tamanho menor para texto
        >
          Uma plataforma completa para DPOs gerenciarem empresas, protegerem
          dados e cumprirem a legislação. Organize informações, automatize
          relatórios e centralize a comunicação em um único lugar.
        </Typography>
      </div>
      {/** Botões de ação no Hero */}
      <div className="call-to-actions flex gap-4 justify-center w-full mt-10">
        {/** Botão principal para chamar ações do usuário */}
        <Button variant="gradient">Entre em Contato</Button>
        {/** Botão secundário para fornecer mais informações */}
        <Button variant="outline">Saiba Mais</Button>
      </div>
    </HeroFC>
  );
};

export default Hero;
