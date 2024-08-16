import About from "./About";
import Baner from "./Baner";
import LazyImage from "./LazyImage";
import StarsBackground from "./StarsBackground";
import Tiles from "./Tiles";

const MainContent = () => {
  return (
    <div className="mainContent">
      <LazyImage
        alt="Splash image"
        name="baner-new"
        path="images"
        classes="baner-top"
      />

      <Baner />
      {/* <WaveOverlay type="top" /> */}
      <StarsBackground />
      <Tiles />
      <About />
    </div>
  );
};

export default MainContent;
