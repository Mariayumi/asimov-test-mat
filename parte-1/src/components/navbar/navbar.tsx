import { Link } from "react-router-dom";
import "./navbar.css";
import Botao from "../botao/botao";
import { logo } from "../../assets";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Positivus Free" />
      <div className="links_uteis">
        <Link typeof="" to="/">
          About us
        </Link>
        <Link typeof="" to="/">
          Services
        </Link>
        <Link typeof="" to="/">
          Use Cases
        </Link>
        <Botao type="outlined" texto="Get your free proposal" />
      </div>
    </nav>
  );
}
