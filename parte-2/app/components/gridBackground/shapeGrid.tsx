"use client";

import { useEffect, useRef } from "react";

export default function ShapeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  const hoveredCell = useRef<{ col: number; row: number } | null>(null);
  const cellOpacity = useRef<Map<string, number>>(new Map());

  const trail = useRef<{ col: number; row: number }[]>([]);
  const trailLength = 8;

  const squareSize = 40;
  const speed = 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getThemeColors = () => {
      if (typeof window === "undefined")
        return { grid: "#333", hover: "#555", bg: "#000", bg2: "#000" };

      const styles = getComputedStyle(document.documentElement);

      // FUNÇÃO AUXILIAR: Remove espaços e garante que a cor não seja vazia
      const getVar = (name: string, fallback: string) => {
        const val = styles.getPropertyValue(name).trim();
        return val || fallback;
      };

      return {
        // Tente usar nomes que você tem certeza que existem no seu CSS global
        grid: getVar("--grid-color", "rgba(128, 128, 128, 0.2)"),
        hover: getVar("--blue-100", "rgba(0, 150, 255, 0.2)"),
        bg: getVar("--background", "#ffff"),
        bg2: getVar("--background-100", "#ffff"),
      };
    };

    const resize = () => {
      // Garante que o canvas pegue o tamanho do pai ou da tela
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const offsetX = offset.current.x % squareSize;
      const offsetY = offset.current.y % squareSize;

      const col = Math.floor((mouseX - offsetX) / squareSize);
      const row = Math.floor((mouseY - offsetY) / squareSize);

      if (
        hoveredCell.current?.col !== col ||
        hoveredCell.current?.row !== row
      ) {
        const newCell = { col, row };
        trail.current.unshift(newCell);
        if (trail.current.length > trailLength)
          trail.current.length = trailLength;
        hoveredCell.current = newCell;
      }
    };

    window.addEventListener("resize", resize);
    // IMPORTANTE: Se o canvas está num container com z-index,
    // o mousemove precisa estar no window ou no parent para ser capturado
    window.addEventListener("mousemove", handleMouseMove);

    resize();

    const draw = () => {
      const colors = getThemeColors();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX = offset.current.x % squareSize;
      const offsetY = offset.current.y % squareSize;

      const cols = Math.ceil(canvas.width / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const x = col * squareSize + offsetX;
          const y = row * squareSize + offsetY;

          const key = `${col},${row}`;
          const alpha = cellOpacity.current.get(key);

          // Brilho do Hover
          if (alpha && alpha > 0) {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = colors.hover;
            ctx.fillRect(x, y, squareSize, squareSize);
            ctx.restore();
          }

          // Linhas da Grade
          ctx.strokeStyle = colors.grid;
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      // Gradiente de Bordas (Fade)
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0, // Raio interno (centro)
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2, // Raio externo
      );

      // 0 é o centro: deixamos transparente para não "sujar" o branco
      gradient.addColorStop(0, colors.bg2);
      // 1 é a borda: aplicamos a cor do fundo para esconder a grade suavemente
      gradient.addColorStop(1, colors.bg);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      offset.current.x -= speed;
      offset.current.y -= speed;

      // Update Opacity
      const targets = new Map<string, number>();
      trail.current.forEach((cell, i) => {
        targets.set(`${cell.col},${cell.row}`, (trailLength - i) / trailLength);
      });

      for (const [key, value] of cellOpacity.current) {
        const target = targets.get(key) || 0;
        const next = value + (target - value) * 0.1;
        if (next < 0.01) cellOpacity.current.delete(key);
        else cellOpacity.current.set(key, next);
      }
      targets.forEach((_, key) => {
        if (!cellOpacity.current.has(key)) cellOpacity.current.set(key, 0);
      });

      draw();
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 block pointer-events-none"
    />
  );
}
