import { useRef } from "react";
import "./animated_images.css";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react";

interface AnimatedImagesProps {
  imageSrc: string;
  staticImageSrc?: string;
  altText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function AnimatedImages({
  imageSrc,
  staticImageSrc,
  altText = "Tilted card image",
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 15,
  scaleOnHover = 1.1,
}: AnimatedImagesProps) {
  const ref = useRef<HTMLElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem Estática (Fica atrás e não se move) */}
      {staticImageSrc && (
        <img
          src={staticImageSrc}
          alt="Background element"
          className="tilted-card-static"
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}

      {/* Container Animado (Imagem de cima) */}
      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{ width: imageWidth, height: imageHeight }}
        />
      </motion.div>
    </figure>
  );
}
