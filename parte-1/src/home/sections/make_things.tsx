import { little_guy, rings_stars } from "../../assets";
import Botao from "../../components/botao/botao";

export default function MakeThingsSection() {
  return (
    <section className="make-things-wrapper">
      <div className="make_things_section">
        <div className="make-things-content">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Botao type="primary" texto={"Get your free proposal"} />
        </div>

        {/* Container relativo para as imagens */}
        <div className="make-things-images">
          <img src={rings_stars} alt="rings_stars" className="img-bg" />
          <img src={little_guy} alt="little_guy" className="img-character" />
        </div>
      </div>
    </section>
  );
}
