import { useEffect, useRef } from "react";
import { ImagePath } from "../Interfaces/ImagePath";

const LazyImage = ({ name, path, alt, classes, style, ext }: ImagePath) => {
  const blur = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const loaded = () => {
      blur.current?.classList.add("loaded");
    };

    if (img.current) {
      if (img.current.complete) {
        loaded();
      } else img.current.addEventListener("load", loaded);
    }

    return () => {
      img.current?.removeEventListener("load", loaded);
    };
  }, []);
  return (
    <div
      className={`BlurImage ${classes ? classes : ""}`}
      ref={blur}
      style={{ backgroundImage: `url(${path}/x16/${name}_x16.webp)` }}
    >
      <img
        loading="lazy"
        src={`${path}/${name}.${!ext ? "webp" : ext}`}
        alt={alt}
        ref={img}
        draggable="false"
        style={style ? style : {}}
      />
    </div>
  );
};

export default LazyImage;
