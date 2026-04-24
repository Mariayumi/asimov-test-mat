"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Tipagem para os tokens de código
interface CodeToken {
  text: string;
  color: string;
}

interface CodeLineData {
  tokens: CodeToken[];
}

const codeLines: CodeLineData[] = [
  {
    tokens: [
      { text: "from", color: "text-[var(--blue)]" },
      { text: " mente_humana ", color: "text-[var(--texto-secundario)]" },
      { text: "import", color: "text-[var(--blue)]" },
      { text: " Cafeina", color: "text-[var(--yellow)]" },
    ],
  },
  {
    tokens: [
      { text: "import", color: "text-[var(--blue)]" },
      {
        text: " inteligencia_artificial ",
        color: "text-[var(--texto-secundario)]",
      },
      { text: "as", color: "text-[var(--blue)]" },
      { text: " cerebro", color: "text-[var(--texto-secundario)]" },
    ],
  },
  {
    tokens: [
      {
        text: "# Se a IA dominar o mundo, pelo menos estarei em Python",
        color: "text-[var(--grey)]",
      },
    ],
  },
  {
    tokens: [
      { text: "vaga_dev ", color: "text-[var(--texto-secundario)]" },
      { text: "=", color: "text-[var(--blue)]" },
      { text: " cerebro.", color: "text-[var(--texto-secundario)]" },
      { text: "gerar_oportunidade", color: "text-[var(--yellow)]" },
      { text: "(", color: "text-[var(--texto-secundario)]" },
    ],
  },
  {
    tokens: [
      { text: "    linguagem", color: "text-[var(--yellow)]" },
      { text: "=", color: "text-[var(--blue)]" },
      { text: '"Python"', color: "text-[var(--green)]" },
      { text: ",", color: "text-[var(--texto-secundario)]" },
    ],
  },
  {
    tokens: [
      { text: "    status", color: "text-[var(--yellow)]" },
      { text: "=", color: "text-[var(--blue)]" },
      { text: '"Contratado!"', color: "text-[var(--green)]" },
      { text: ",", color: "text-[var(--texto-secundario)]" },
    ],
  },
  {
    tokens: [
      { text: "    paciencia", color: "text(--yellow)" },
      { text: "=", color: "text-[var(--blue)]" },
      { text: "None", color: "text-[var(--blue)]" },
    ],
  },
  { tokens: [{ text: ")", color: "text-[var(--texto-secundario)]" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "if", color: "text-[var(--blue)]" },
      { text: " voce_nao_estudar", color: "text-[var(--texto-secundario)]" },
      { text: ":", color: "text-[var(--blue)]" },
    ],
  },
  {
    tokens: [
      { text: "    print", color: "text-[var(--yellow)]" },
      { text: "(", color: "text-[var(--texto-secundario)]" },
      { text: '"Error: Sua IA te achou lento!"', color: "text-[var(--green)]" },
      { text: ")", color: "text-[var(--texto-secundario)]" },
    ],
  },
  {
    tokens: [
      { text: "else", color: "text-[var(--blue)]" },
      { text: ":", color: "text-[var(--blue)]" },
    ],
  },
  {
    tokens: [
      { text: "    print", color: "text-[var(--yellow)]" },
      { text: "(", color: "text-[var(--texto-secundario)]" },
      { text: '"Python + IA = 🚀"', color: "text-[var(--green)]" },
      { text: ")", color: "text-[var(--texto-secundario)]" },
    ],
  },
];
interface CodeLineProps {
  line: CodeLineData;
  lineIndex: number;
  visibleLines: number;
}

function CodeLine({ line, lineIndex, visibleLines }: CodeLineProps) {
  if (lineIndex >= visibleLines) return null;
  const isCurrent = lineIndex === visibleLines - 1;

  return (
    <div className="flex items-start gap-4 leading-6">
      <span className="select-none w-5 text-right text-[var(--grey)] opacity-50 font-mono text-xs shrink-0 mt-0.5">
        {lineIndex + 1}
      </span>
      <span
        className="font-mono text-xs flex items-center flex-wrap"
        style={{ whiteSpace: "pre" }}
      >
        {line.tokens.length === 0 ? (
          <span>&nbsp;</span>
        ) : (
          line.tokens.map((token, i) => (
            <span key={i} className={token.color}>
              {token.text}
            </span>
          ))
        )}
      </span>
    </div>
  );
}

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [output, setOutput] = useState("");
  const fullOutput = "✓ Acurácia: 94.7%  |  tokens: 312  |  0.8s";

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const delay = codeLines[visibleLines - 1]?.tokens.length === 0 ? 60 : 100;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    } else {
      let i = 0;
      const timer = setInterval(() => {
        setOutput(fullOutput.slice(0, i + 1));
        i++;
        if (i >= fullOutput.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      className="relative w-full lg:w-[70%] mx-auto lg:mx-0"
    >
      {/* Glow ambiente usando suas cores */}
      <div
        className="absolute -inset-10 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--blue-100) 0%, transparent 70%)`,
          opacity: 0.2,
        }}
      />

      {/* Terminal window */}
      <div
        className="relative rounded-2xl border border-[var(--grey-100)] overflow-hidden shadow-2xl shadow-black/50"
        style={{
          backgroundColor: "var(--grey)",
        }}
      >
        {/* Title bar */}
        <div
          className="relative flex items-center gap-2 px-4 py-3 border-b border-[var(--grey-100)] opacity-80"
          style={{ background: "var(--background)" }}
        >
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-[var(--yellow-100)] border border-[var(--yellow)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--blue-100)] border border-[var(--blue)]" />
          </div>
          <span className="font-mono text-xs text-[var(--texto-principal)] ml-4">
            main.py
          </span>
        </div>

        {/* Code area */}
        <div className="relative p-6 space-y-1">
          {codeLines.map((line, i) => (
            <CodeLine
              key={i}
              line={line}
              lineIndex={i}
              visibleLines={visibleLines}
            />
          ))}

          {/* Output block */}
          {output && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-4 border-t border-[var(--blue-100)]"
            >
              <div className="font-mono text-xs flex items-center gap-2 text-[var(--green)]">
                <span>›</span>
                <span className="text-[var(--texto-secundario)]">{output}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Status bar */}
        <div
          className="relative flex items-center justify-between px-4 py-2 border-t border-[var(--blue-100)]"
          style={{ background: "rgba(115, 214, 216, 0.05)" }}
        >
          <span className="font-mono text-[10px] text-[var(--blue)] opacity-70">
            Python 3.12
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[var(--grey)]">
              Ln {Math.min(visibleLines, codeLines.length)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
