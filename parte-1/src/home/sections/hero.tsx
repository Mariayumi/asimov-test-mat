import Botao from "../../components/botao/botao";
import megafone from "../../assets/images/megafone.svg";
import rings from "../../assets/images/rings.svg";

export default function HeroSection() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <div style={{ display: "grid", gap: "35px", width: "40vw" }}>
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Botao type="primary" texto="Book a consultantion"></Botao>
        </div>
        <div className="hero-images">
          <img src={rings} alt="Rings" className="img-rings" />
          <img src={megafone} alt="Megafone" className="img-megafone" />
        </div>
      </div>
      <div>carrosel de logos</div>
    </section>
  );
}
