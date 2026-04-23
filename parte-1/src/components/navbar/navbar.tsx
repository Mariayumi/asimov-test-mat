import { Link } from "react-router-dom";
import "./navbar.css";
import Botao from "../botao/botao";
import { logo } from "../../assets";
import { useEffect, useState } from "react";
import { TextAlignJustify, X } from "lucide-react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    if (menuAberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuAberto]);

  return (
    <nav className="navbar_container">
      <img src={logo} alt="Positivus Free" className="navbar-logo" />

      <div className="menu_icon" onClick={toggleMenu}>
        {menuAberto ? <X /> : <TextAlignJustify />}
      </div>

      <div className={`links_uteis ${menuAberto ? "active" : ""}`}>
        <div>

        </div>
        <Link to="/" onClick={() => setMenuAberto(false)}>
          About us
        </Link>
        <Link to="/" onClick={() => setMenuAberto(false)}>
          Services
        </Link>
        <Link to="/" onClick={() => setMenuAberto(false)}>
          Use Cases
        </Link>
        <div className="navbar-button-container">
          <Botao type="outlined" texto="Request a quote" />
        </div>
      </div>
    </nav>
  );
}
