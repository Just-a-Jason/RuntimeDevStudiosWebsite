import { useEffect, useRef } from "react";

interface LinkToSectionProps {
  svg: React.ReactElement;
  text: string;
  id: string;
}

const LinkToSection = ({ id, svg, text }: LinkToSectionProps) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const click = () => {
      document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
    };
    ref.current?.addEventListener("click", click);

    return () => {
      ref.current?.removeEventListener("click", click);
    };
  }, []);
  return (
    <p className="link" ref={ref}>
      {text}
      {svg}
    </p>
  );
};
export default LinkToSection;
