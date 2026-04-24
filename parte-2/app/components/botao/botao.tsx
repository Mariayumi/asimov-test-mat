export interface BotaoProps {
  texto: string;
  onClick?: () => void;
  tipo: "primary" | "outlined" | "text";
  className?: string;
}

export default function Botao(props: BotaoProps) {
  const stylePrimary = {
    backgroundColor: "var(--blue)",
    color: "var(--blue-900)",
    boxShadow: "0px 0px 30px 0px var(--blue-100)",
  };

  const styleOutlined = {
    backgroundColor: "var(--background)",
    border: "1px solid var(--grey-100)",
  };

  const styleText = {
    color: "var(--blue)",
  };

  const styles =
    props.tipo === "primary"
      ? stylePrimary
      : props.tipo === "outlined"
        ? styleOutlined
        : styleText;

  return (
    <button
      onClick={props.onClick}
      className={`${props.className} rounded-[12px] py-[8px] md:py-[16px] px-[24px] md:px-[36px] cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out text-sm md:text-lg`}
      style={styles}
    >
      {props.texto}
    </button>
  );
}
