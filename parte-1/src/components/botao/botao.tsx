import { useRef } from "react";
import "./botao.css";

export interface BotaoProps {
  icone?: React.ReactNode;
  texto: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "outlined" | "primary" | "link";
}

export default function Botao(props: BotaoProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onClick={props.onClick}
      className={`${props.className || ""} botao btn-${props.type || "primary"}`}
      disabled={props.disabled}
    >
      <span className="btn-glare"></span>

      <span className="btn-content">
        {props.icone}
        {props.texto}
      </span>
    </button>
  );
}
