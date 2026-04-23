import "../../page.css";
import "./hero.css";
import Botao from "../../../components/botao/botao";
import AnimatedImages from "../../../components/animated_images/animated_images";
import LogoLoop from "../../../components/loop/loop";
import {
  amazon_logo,
  dribble_logo,
  hubspot_logo,
  megafone,
  netflix_logo,
  notion_logo,
  rings,
  zoom_logo,
} from "../../../assets";

const clientLogos = [
  { src: amazon_logo, alt: "Amazon", link: "https://www.amazon.com/" },
  { src: dribble_logo, alt: "Dribbble", link: "https://dribbble.com/" },
  { src: hubspot_logo, alt: "HubSpot", link: "https://hubspot.com" },
  { src: notion_logo, alt: "Notion", link: "https://www.notion.com/" },
  { src: netflix_logo, alt: "Netflix", link: "https://www.netflix.com/browse" },
  { src: zoom_logo, alt: "Zoom", link: "https://www.zoom.com/pt" },
];

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-container">
          <h1>Navigating the digital landscape for success</h1>

          <div className="hero-animated-image-small">
            <AnimatedImages
              imageSrc={megafone}
              staticImageSrc={rings}
              altText="Megafone"
              containerWidth="fit-content"
              containerHeight="fit-content"
              imageWidth="70vw"
              imageHeight="25vh"
              rotateAmplitude={20}
            />
          </div>

          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Botao type="primary" texto="Book a consultantion"></Botao>
        </div>

        <div className="hero-animated-image-large">
          <AnimatedImages
            imageSrc={megafone}
            staticImageSrc={rings}
            altText="Megafone"
            containerWidth="fit-content"
            containerHeight="fit-content"
            imageWidth="40vw"
            imageHeight="40vh"
            rotateAmplitude={20}
          />
        </div>
      </div>
      <div className="carousel-section">
        <LogoLoop logos={clientLogos} speed={40} />
        <div className="carousel-container-small">
          <LogoLoop logos={clientLogos} speed={40} direction="right" />
        </div>
      </div>
    </section>
  );
}
