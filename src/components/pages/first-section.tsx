import DescriptionItem from "@/components/ui/description-item"; // Componente de descrição
import { Typography } from "@/typography"; // Componente de tipografia
import { Shield, Server, File, Lock } from "lucide-react"; // Ícones mais finos e minimalistas
import type React from "react"; // Tipagem do React para componentes funcionais

/**
 * Componente FirstSection
 * Representa a primeira seção da página, com informações e funcionalidades voltadas para LGPD e DPO.
 */
export const FirstSection: React.FC = () => {
  // Classe de gradiente personalizada para estilizar os ícones com um efeito visual
  const gradientIconClass =
    "bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#868585] text-transparent p-2 rounded-md"; // ícones menores e com border-radius adequado

  // Definição dos itens da seção, incluindo ícones, títulos, subtítulos e descrições
  const items = [
    {
      icon: (
        <div className={`h-10 w-10 ${gradientIconClass}`}>
          <Shield className="h-full w-full text-white" />{" "}
          {/* Ícone de escudo (mais fino) */}
        </div>
      ),
      title: "Garanta Conformidade", // Título principal do item
      subtitle: "Proteção e Segurança", // Subtítulo que complementa o título
      description:
        "Implemente práticas de conformidade com a LGPD, realizando o mapeamento e monitorando o uso correto dos dados pessoais.", // Descrição do item
    },
    {
      icon: (
        <div className={`h-10 w-10 ${gradientIconClass}`}>
          <Server className="h-full w-full text-white" />{" "}
          {/* Ícone de servidor */}
        </div>
      ),
      title: "Gestão Centralizada", // Título principal do item
      subtitle: "Controle Unificado", // Subtítulo que complementa o título
      description:
        "Administre dados pessoais de maneira centralizada, garantindo maior visibilidade, controle e conformidade em todos os processos.", // Descrição do item
    },
    {
      icon: (
        <div className={`h-10 w-10 ${gradientIconClass}`}>
          <File className="h-full w-full text-white" /> {/* Ícone de arquivo */}
        </div>
      ),
      title: "Relatórios Automatizados", // Título principal do item
      subtitle: "Transparência Completa", // Subtítulo que complementa o título
      description:
        "Gere relatórios claros e precisos para auditores e partes interessadas, promovendo transparência e facilitando o cumprimento regulatório.", // Descrição do item
    },
  ];

  return (
    <div className="w-full border-b border-slice-line lg:py-20 py-14 lg:px-0 px-14">
      {/* Container principal que engloba toda a seção */}
      <section className="container mx-auto">
        {/* Título principal da seção */}
        <Typography
          as="h2"
          variant="sectionTitle"
          className="text-primary leading-[1] mb-8"
        >
          Funcionalidades Essenciais <br />
          para Conformidade e Gestão
        </Typography>

        {/* Texto introdutório que descreve a seção */}
        <Typography as="p" variant="body" className="max-w-[500px] mt-12">
          Nossa plataforma oferece soluções completas para garantir a
          conformidade com a LGPD, protegendo dados pessoais e otimizando os
          processos regulatórios da sua empresa.
        </Typography>

        {/* Lista de itens explicativos */}
        <div className="sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-20 flex flex-col">
          {items.map((item, index) => (
            <DescriptionItem
              key={item.title} // Chave única para cada item
              index={index} // Índice atual do item na lista
              title={item.title} // Título do item
              subtitle={
                // Aplicando o gradiente ao subtítulo
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#868585]">
                  {item.subtitle}
                </span>
              }
              description={item.description} // Descrição detalhada do item
              icon={item.icon} // Ícone com gradiente
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FirstSection; // Exportação padrão do componente
