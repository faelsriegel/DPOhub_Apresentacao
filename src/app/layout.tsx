import type { Metadata } from "next"; // Importa o tipo Metadata para definir informações da página
import { Montserrat } from "next/font/google"; // Importa a fonte Montserrat do Google Fonts

import { Header } from "@/pages/header"; // Importa o componente do cabeçalho
import { Footer } from "@/pages/footer"; // Importa o componente do rodapé

import "./globals.css"; // Importa estilos globais

// Configuração da fonte Montserrat
// Usada para todos os textos do site (títulos e descrições)
const montserrat = Montserrat({
  subsets: ["latin"], // Define os caracteres suportados (subconjunto Latin)
  weight: ["200", "300", "400", "500", "700"], // Define os pesos disponíveis (ex.: 200 = mais leve, 700 = mais forte)
});

// Metadados da página (definem título e descrição)
export const metadata: Metadata = {
  title: "DPOhub - Transforme a Gestão da LGPD em sua Empresa", // Título exibido na aba do navegador
  description: "Simplifique a gestão da LGPD com eficiência e controle.", // Descrição otimizada para SEO
};

// Componente RootLayout
// Define a estrutura básica de todas as páginas do site
export default function RootLayout({
  children, // Representa o conteúdo dinâmico (children são as páginas renderizadas)
}: Readonly<{
  children: React.ReactNode; // Define o tipo do conteúdo que o layout aceita
}>) {
  return (
    <html lang="pt-br" className="bg-white">
      {/**
       * Define o idioma da página como português do Brasil (pt-br)
       * Aplica um fundo branco à página com a classe Tailwind `bg-white`
       */}
      <body className={`${montserrat.className} antialiased`}>
        {/**
         * Aplica a fonte Montserrat como padrão para todo o conteúdo do site.
         * Adiciona a classe `antialiased` para suavizar fontes no navegador.
         */}
        <Header />
        {/** Renderiza o cabeçalho do site */}
        <main className={`${montserrat.className} text-base`}>
          {/** Define o conteúdo principal da página com a fonte Montserrat e tamanho de texto base */}
          {children}
        </main>
        <Footer />
        {/** Renderiza o rodapé do site */}
      </body>
    </html>
  );
}
