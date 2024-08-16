import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ImagePath } from "../Interfaces/ImagePath";
import LazyImage from "./LazyImage";

interface AboutProjectCardProps {
  alignment: "left" | "right";
  image?: ImagePath;
  text: string;
  width?: string;
}
const AboutProjectCard = ({
  image,
  text,
  alignment,
  width,
}: AboutProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animationController = useAnimation();
  const variants = {
    hidden: { opacity: 0, x: alignment === "left" ? -75 : 75 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (isInView) {
      animationController.start("visible");
    } else {
      animationController.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="AboutProjectCard"
      style={(alignment === "right" && { flexDirection: "row-reverse" }) || {}}
      initial="hidden"
      animate={animationController}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={variants}
    >
      {image && (
        <LazyImage
          alt={image.alt}
          name={image.name}
          path={image.path}
          style={{ width: width }}
          ext={image.ext}
        />
      )}
      <p>{text}</p>
    </motion.div>
  );
};

export default AboutProjectCard;
