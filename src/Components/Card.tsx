import { ImagePath } from "../Interfaces/ImagePath";
import LazyImage from "./LazyImage";

interface CardProps {
  children?: React.ReactNode;
  description: string;
  picture: ImagePath;
  title: string;
  pin: string;
}

const Card = ({ title, description, picture, pin, children }: CardProps) => {
  return (
    <div className="card">
      <LazyImage
        path="Sprites"
        alt="tile-pin"
        name={pin}
        classes="character-icon"
      />
      <LazyImage
        path={picture.path}
        alt={picture.alt}
        name={picture.name}
        classes={picture.classes}
      />
      <div className="about-me">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="social">{children}</div>
      </div>
    </div>
  );
};

export default Card;
