import LazyImage from "./LazyImage";

const Baner = () => {
  return (
    <div className="glitch">
      <LazyImage
        alt="banner"
        path="images"
        name="baner-small"
        classes=".glitch"
      />
      <div className="glitch__layers">
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
      </div>
    </div>
  );
};

export default Baner;
