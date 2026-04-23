import "../../page.css";
import "./services.css";
import {
  click,
  comments,
  content,
  dashboard,
  letters,
  search,
} from "../../../assets";
import Card, { type CardTheme } from "../../../components/card/card";

export const listaServicos = [
  {
    titulo1: "Search Engine",
    titulo2: "optimization",
    imagem: search,
  },
  {
    titulo1: "Pay-per-click",
    titulo2: "advertising",
    imagem: click,
  },
  {
    titulo1: "Social Media",
    titulo2: "Marketing",
    imagem: comments,
  },
  {
    titulo1: "Email",
    titulo2: "Marketing",
    imagem: letters,
  },
  {
    titulo1: "Content",
    titulo2: "Creation",
    imagem: content,
  },
  {
    titulo1: "Analytics and ",
    titulo2: "Tracking",
    imagem: dashboard,
  },
];

export default function ServicesSection() {
  const temas: CardTheme[] = ["grey", "green", "dark"];

  return (
    <section>
      <div className="titulo-section">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="services-cards-container">
        {listaServicos.map((servico, index) => (
          <Card
            titulo1={servico.titulo1}
            titulo2={servico.titulo2}
            theme={temas[index % temas.length]}
            imagem={servico.imagem}
          />
        ))}
      </div>
    </section>
  );
}
