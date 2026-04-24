"use client";

import Botao from "@/app/components/botao/botao";
import Card from "@/app/components/card/card";
import ShapeGrid from "@/app/components/gridBackground/shapeGrid";
import Terminal from "@/app/components/terminal/terminal";
import { BadgeCheck, Clock, Cpu, Users } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const bullets = [
    {
      titulo: "+40 horas de conteúdo",
      descricao: "Direto ao ponto, sem enrolação",
      icone: <Clock color="var(--yellow)" />,
    },
    {
      titulo: "Projetos com IA",
      descricao: "Desde o módulo 1",
      icone: <Cpu color="var(--yellow)" />,
    },
    {
      titulo: "Suporte da comunidade",
      descricao: "+20.000 alunos conectados",
      icone: <Users color="var(--yellow)" />,
    },
    {
      titulo: "Certificado",
      descricao: "Reconhecido pelo mercado",
      icone: <BadgeCheck color="var(--yellow)" />,
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-[60px] min-h-screen gap-20 overflow-hidden">
      {/* BACKGROUND */}
      <ShapeGrid />

      <div className="relative z-10 w-full max-w-[1600px] px-4 md:px-8 grid grid-cols-12 gap-6 lg:gap-10 justify-between items-center">
        <div className=" relative z-10 col-span-12 xl:col-span-6 flex flex-col gap-6 text-center items-center xl:text-left xl:items-start">
          <span className="text-sm lg:text-lg text-[var(--yellow)] border border-[var(--yellow)] bg-[var(--yellow-100)] rounded-full px-[25px] py-1 font-medium w-fit">
            Python + Inteligência Artificial
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--texto-principal)]">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-[var(--blue)] via-[var(--blue-variant)] to-[var(--blue)] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
                display: "inline-block",
              }}
            >
              Aprenda Python do zero
            </motion.span>{" "}
            e construa projetos reais{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-[var(--yellow)] via-[var(--yellow-variant)] to-[var(--yellow)] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
                display: "inline-block",
              }}
            >
              com IA
            </motion.span>{" "}
          </h1>

          <p className="text-sm lg:text-lg  text-[var(--texto-secundario)]">
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] w-full">
            {bullets.map((bullet, index) => (
              <Card
                key={index}
                titulo={bullet.titulo}
                descricao={bullet.descricao}
                icone={bullet.icone}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
            <Botao texto="Quero começar agora" tipo="primary" />
            <Botao texto="Ver o que vou aprender" tipo="outlined" />
          </div>
        </div>
        {/* Terminal também com z-10 */}
        <div className="relative z-10 col-span-12 xl:col-span-6 flex items-center justify-center">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
