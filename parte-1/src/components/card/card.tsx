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
      <div className="card-title-container">
        <h3>{props.titulo1}</h3>
        {props.titulo2 && <h3>{props.titulo2}</h3>}
      </div>

      <div className="card-container">
        <div className="card-link-container">
          <img
            src={props.theme === "dark" ? arrow_light : arrow_dark}
            alt="arrow"
            className="card-icone"
          />
          <Link to={props.link}>Learn more</Link>
        </div>
        {props.imagem && (
          <img src={props.imagem} alt={props.titulo1} className="card-img" />
        )}
      </div>

    </div>
  );
}
