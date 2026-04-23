import { motion } from "motion/react";
import "./loop.css";

interface LogoItem {
  src: string;
  alt: string;
  link: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
}

export default function LogoLoop({
  logos,
  speed = 20,
  direction = "left",
}: LogoLoopProps) {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-loop-container">
      <div className="logo-loop-mask">
        <motion.div
          className="logo-loop-track"
          animate={{
            x: direction === "left" ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-item"
            >
              <img src={logo.src} alt={logo.alt} />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
