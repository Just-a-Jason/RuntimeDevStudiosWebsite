import { useEffect, useRef, useState } from "react";
import { DataObject } from "../Interfaces/DataObject";
import { Blog } from "../Interfaces/Blog";
import { useParams } from "react-router-dom";
import ContentLoader from "../Components/ContentLoader";
import Footer from "../Components/Footer";
import WaveOverlay from "../Components/WaveOverlay";
import HomeButton from "../Components/HomeButton";
import FullBlog from "../Components/FullBlog";

const BlogPage = () => {
  const [blog, setBlog] = useState<null | Blog | undefined>(null);
  const { id } = useParams();

  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(
      "https://raw.githubusercontent.com/Just-a-Jason/NostalgiaNexusData/main/jasonbpgames.json",
      {
        method: "GET",
        signal: signal,
      }
    )
      .then((data) => data.json())
      .then((data: DataObject) => setBlog(data.blogs[parseInt(id!)]))
      .catch((err) => err);

    return () => controller.abort();
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="BlogPage" id="blogpage" ref={ref}>
        <WaveOverlay type="top" />
        {(blog === undefined && (
          <div className="NotFound">
            <p>
              This page does not exist.{" "}
              <svg width="40px" height="40px" viewBox="0 0 32 32">
                <circle cx={11} cy={8} r={1} fill="white"></circle>
                <circle cx={11} cy={16} r={1} fill="white"></circle>
                <circle cx={11} cy={24} r={1} fill="white"></circle>
                <path
                  fill="white"
                  d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h10v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"
                ></path>
                <path
                  fill="white"
                  d="M29 24.415L27.586 23L25 25.587L22.414 23L21 24.415L23.586 27L21 29.586L22.414 31L25 28.414L27.586 31L29 29.586L26.414 27z"
                ></path>
              </svg>
            </p>
            <HomeButton />
          </div>
        )) ||
          (!blog && <ContentLoader loading="blog post" />) || (
            <FullBlog blog={blog!} />
          )}
        <WaveOverlay type="bottom" />
      </div>
      <Footer margin={80} />
    </>
  );
};

export default BlogPage;
