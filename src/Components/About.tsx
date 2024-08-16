import LinkToSection from "./LinkToSection";

const About = () => {
  return (
    <div className="about">
      <p>
        We are going to switch to
        <img src="images/unity.webp" alt="unity" draggable="false" />
      </p>
      <LinkToSection
        svg={
          <svg width="20px" height="20px" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            ></path>
          </svg>
        }
        id="about-project"
        text="About Project"
      />
      <LinkToSection
        svg={
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <path
              fill="white"
              d="M11.229 11.229c-1.583 1.582-3.417 3.096-4.142 2.371c-1.037-1.037-1.677-1.941-3.965-.102c-2.287 1.838-.53 3.064.475 4.068c1.16 1.16 5.484.062 9.758-4.211c4.273-4.274 5.368-8.598 4.207-9.758c-1.005-1.006-2.225-2.762-4.063-.475c-1.839 2.287-.936 2.927.103 3.965c.722.725-.791 2.559-2.373 4.142"
            />
          </svg>
        }
        id="contact"
        text="Contact us"
      />
      <LinkToSection
        svg={
          <svg width="20px" height="20px" viewBox="0 0 16 16">
            <path
              fill="white"
              d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
            />
          </svg>
        }
        text="Our Team"
        id="team"
      />
    </div>
  );
};

export default About;
