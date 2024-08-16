import { useRef, useState, useEffect } from "react";
import AboutProject from "../Components/AboutProject";
import ContentLoader from "../Components/ContentLoader";
import MainContent from "../Components/MainContent";
import SocialLink from "../Components/SocialLink";
import WaveOverlay from "../Components/WaveOverlay";
import { DataObject } from "../Interfaces/DataObject";
import Contact from "../Components/Contact";
import Blogs from "../Components/Blogs";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const HomePage = () => {
  const arrow = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DataObject | null>(null);

  const randomIcon = (): void => {
    const characters = [
      "William",
      "GoldenFreddy",
      "Cupcake",
      "Springtrap",
      "Foxy",
      "NightmareFoxy",
      "Freddy",
      "Chica",
      "Bonnie",
    ];

    const icon = characters[Math.floor(Math.random() * characters.length)];
    const webIcon = document.querySelector(
      "link[rel=icon]"
    )! as HTMLLinkElement;
    webIcon.href = `Sprites/${icon}.webp`;
  };

  useEffect(() => {
    let ambient: HTMLAudioElement | null = new Audio("sounds/ambient.ogg");
    ambient.muted = true;
    ambient.loop = true;

    const controller = new AbortController();
    const signal = controller.signal;

    const playAudio = () => {
      if (ambient) {
        ambient.muted = false;
        // remove error
        ambient.play().catch((e) => e);
      }
    };

    document.addEventListener("click", playAudio);

    fetch(
      "https://raw.githubusercontent.com/Just-a-Jason/NostalgiaNexusData/main/jasonbpgames.json",
      {
        method: "GET",
        signal: signal,
      }
    )
      .then((data) => data.json())
      .then((data: DataObject) => setData(data))
      .catch((err) => err);

    randomIcon();
    const onScroll = () => {
      var scrollHeight, totalHeight;
      scrollHeight = document.body.scrollHeight;
      totalHeight = window.scrollY + window.innerHeight;

      if (arrow.current) {
        if (totalHeight > scrollHeight / 2)
          arrow.current.classList.remove("down");
        else arrow.current.classList.add("down");
      }
      arrow.current!.addEventListener("click", () => {
        if (arrow.current!.classList.contains("down"))
          document.querySelector("footer")!.scrollIntoView();
        else document.querySelector("#canvas")!.scrollIntoView();
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("click", playAudio);
      ambient?.pause();
      // remove the reference
      ambient = null;
      window.removeEventListener("scroll", onScroll);
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="arrow" ref={arrow}>
        <svg width="60px" height="60px" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"
          />
        </svg>
      </div>

      <MainContent />
      <div className="Team">
        <WaveOverlay type="top" />

        <h1 id="team">--- OUR TEAM ---</h1>
        <Card
          title="Jason.json (PROGRAMMER)"
          description="Hi, I am Jason.json! 😊 I know JavaScript, TypeScript, Python, HTML, PHP, CSS, C#, and a little bit of C and C++. I’m also trying to master Blazor and React. I love using TypeScript instead of JavaScript. 💞"
          picture={{
            name: "jason",
            alt: "profile picture",
            path: "images",
            classes: "profile-pic",
          }}
          pin="robotPice1"
        >
          <SocialLink type="Github" to="https://github.com/Just-a-Jason" />
          <SocialLink
            type="Instagram"
            to="https://www.instagram.com/antoni.wojcieszyk/"
          />
          <SocialLink type="Tiktok" to="https://www.tiktok.com/@jason.json34" />
          <SocialLink
            type="Youtube"
            to="https://www.youtube.com/@jasondotjson34"
          />
        </Card>
        <Card
          title="Denis A. Vaida (ARTIST)"
          description="Denis is one of the best friends I've ever had. He's an incredibly talented artist. His art is absolutely amazing. I'm proud that I can finally showcase my dear friend on this new webpage! If you're interested, do check out his Instagram. I guarantee you won't be disappointed! :> - Jason.json"
          picture={{
            name: "denis",
            alt: "profile picture",
            path: "images",
            classes: "profile-pic",
          }}
          pin="William"
        >
          <SocialLink
            type="Instagram"
            to="https://www.instagram.com/denisadrian47/"
          />
        </Card>
        <Card
          title="Kuguar2 (PROGRAMMER)"
          description="Kuguar2 is not just a friend, but also a pillar of support in this project. Together, we share a vision of excellence and are committed to making this project truly remarkable. Our goal is to enhance your experience, making it as enjoyable and seamless as possible."
          picture={{
            name: "kuguar2",
            alt: "profile picture",
            path: "images",
            classes: "profile-pic",
          }}
          pin="lolipop"
        >
          <SocialLink type="Github" to="https://github.com/Kuguar2" />
        </Card>
        <WaveOverlay type="bottom" />
      </div>

      <h1 id="about-project" style={{ marginTop: "120px" }}>
        --- ABOUT PROJECT ---
      </h1>
      <AboutProject progress={(data && data.progress) || 0} />

      <div className="BlogSection">
        <WaveOverlay type="top" />
        <h1 id="blog" style={{ marginTop: "120px" }}>
          --- BLOG ---
        </h1>

        {(!data && <ContentLoader loading="blogs" />) ||
          (data?.blogs.length === 0 && (
            <p>There is nothing to display here...</p>
          )) || <Blogs blogs={data!.blogs} />}
        <WaveOverlay type="bottom" />
      </div>
      <div className="ContactSection">
        <h1 id="contact" style={{ marginTop: "120px" }}>
          --- CONTACT US ☎️ ---
        </h1>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
