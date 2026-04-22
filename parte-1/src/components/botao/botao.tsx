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
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} botao btn-${props.type || "primary"}`}
      disabled={props.disabled}
    >
      {props.icone}
      {props.texto}
    </button>
  );
}
