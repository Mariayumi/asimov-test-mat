import { Link } from "react-router-dom";
import "./card.css";
import { arrow_dark, arrow_light } from "../../assets";

export type CardTheme = "grey" | "dark" | "green";

export interface CardProps {
  titulo1: string;
  titulo2?: string;
  link?: string;
  className?: string;
  imagem?: string;
  theme?: CardTheme;
}

export default function Card(props: CardProps) {
  return (
    <div className={`${props.className} card ${props.theme || "grey"}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>{props.titulo1}</h3>
          {props.titulo2 && <h3>{props.titulo2}</h3>}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={props.theme === "dark" ? arrow_light : arrow_dark}
            alt="arrow"
            style={{ height: "41px", width: "41px" }}
          />
          <Link to={props.link}>Learn more</Link>
        </div>
      </div>
      {props.imagem && <img src={props.imagem} alt={props.titulo1} />}
    </div>
  );
}
