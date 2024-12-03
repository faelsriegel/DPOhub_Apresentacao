import { DatabaseZap, FileStack } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { SliceIcon } from "@/components/ui/slice-icon";

import { Typography } from "@/typography";
import Image from "next/image";
import aldImage from "@/assets/images/computer.webp"; // Imagem WebP importada

export const SecondSection: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center">
        <Button className="flex-none mb-8" variant="outlineMuted">
          Sistema WEB de Conformidade á LGPD
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Imagem à esquerda do título */}
        <div className="lg:w-[55%] mb-4 lg:mb-0 lg:-mr-20 lg:ml-20">
          {/* A imagem agora tem 20% a mais de tamanho */}
          <Image src={aldImage} alt="Computer Image" width={700} height={360} />
        </div>

        {/* Título à direita da imagem */}
        <div className="lg:w-[65%] text-center lg:text-left">
          <Typography
            className="
              text-primary 
              font-regular 
              text-[32px] leading-[38px] 
              lg:text-[38px] lg:leading-[42px] 
              lg-xl:text-[36px] lg-xl:leading-[48px] 
              xl:text-[56px] xl:leading-[65px]"
          >
            Plataforma de Gestão<br></br>&{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#868585]">
              Adequação à LGPD
            </span>{" "}
          </Typography>
        </div>
      </div>

      <Typography
        as="p"
        variant="body"
        className="mt-14 text-center max-w-[820px] mx-auto"
      >
        Descubra como simplificar a conformidade com as normativas federais,
        assegurando com excelência a privacidade e a gestão das informações
        operadas em sua organização. Entre em contato agora mesmo para assinar e
        fortalecer a sua estratégia de proteção de dados em sua corporação.
      </Typography>

      {/* <WebsiteTable /> */}
    </section>
  );
};

export default SecondSection;
