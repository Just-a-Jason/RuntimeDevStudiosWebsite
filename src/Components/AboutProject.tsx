import AboutProjectCard from "./AboutProjectCard";
import LazyImage from "./LazyImage";
import ProgressBar from "./ProgressBar";

interface AboutProjectProps {
  progress: number;
}

const AboutProject = ({ progress }: AboutProjectProps) => {
  return (
    <div className="AboutProject">
      <AboutProjectCard
        image={{ name: "me", path: "images", alt: "project image" }}
        alignment="right"
        text="Hi my name is Antoni (Jason.json). I'm an 18 year old programmer and also the creator of this website I would like to intruduce you to The FNAF Maze Project."
      />
      <AboutProjectCard
        image={{ name: "tfm1", path: "images", alt: "project image" }}
        alignment="left"
        text="It started as TypeScript 2D webgame project."
      />
      <AboutProjectCard
        image={{ name: "tfm2", path: "images", alt: "project image" }}
        alignment="right"
        text="It has build-in level editor & debug menu. You could play it also with your PS4 or XBOX controller."
      />
      <AboutProjectCard
        alignment="left"
        image={{ name: "unity", path: "images", alt: "project image" }}
        text="We will move shortly to Unity to build it with WebGL technology. And made it 3D, maybe with a first person mode too!"
        width="120px"
      />
      <AboutProjectCard
        alignment="right"
        image={{
          name: "concept1",
          path: "images",
          alt: "about project image",
        }}
        text="Here is a concept art how it would look like in 3D."
      />
      <h1>Game Progress</h1>
      <ProgressBar progress={progress} />
      <h1>First person concept</h1>
      <LazyImage
        alt="3D animation first person concept"
        name="concept"
        path="images"
        classes="concept"
        ext="gif"
      />
    </div>
  );
};

export default AboutProject;
