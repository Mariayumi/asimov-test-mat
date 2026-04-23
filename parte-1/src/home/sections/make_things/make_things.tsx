import "./make_things.css";
import "../../page.css";
import { guy_stars, rings_horizontal } from "../../../assets";
import AnimatedImages from "../../../components/animated_images/animated_images";
import Botao from "../../../components/botao/botao";

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

        <div className="make-things-images">
          <AnimatedImages
            imageSrc={guy_stars}
            staticImageSrc={rings_horizontal}
            altText="Megafone"
            containerWidth="60%"
            containerHeight="250%"
            imageWidth="100%"
            imageHeight="100%"
            rotateAmplitude={20}
          />
        </div>
      </div>
    </section>
  );
}
