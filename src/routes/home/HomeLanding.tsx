import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeLanding.css";
import HomeLandingFooter from "./HomeLandingFooter/HomeLandingFooter";
import IntroBox from "./IntroBox/IntroBox";
import ProjectBox from "./ProjectBox/ProjectBox";
import SectionDivider from "./SectionDivider/SectionDivider";
const HomeLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add(".animate");
        }
      });
    });

    observer.observe(
      document.querySelector(".project-box-wrapper") as HTMLElement
    );
  }, []);

  return (
    <main className="home-landing">
      <div className="intro-box-wrapper">
        <h1>Mattias Larsson</h1>
        <IntroBox />
      </div>
      <SectionDivider text="Projects" />
      <ProjectBox
        title="Tibber"
        description="A simple web app to track the energy consumption of a household using a number of APIs."
        side="left"
        onClick={() => navigate("./tibber")}
      />
      <ProjectBox
        title="Libretto"
        description="A description for the Libretto project"
        side="right"
        onClick={() => navigate("./libretto")}
      />
      <ProjectBox
        title="Hake"
        description="A description for the Hake project"
        side="left"
        onClick={() => navigate("./hake")}
      />
      <HomeLandingFooter />
    </main>
  );
};

export default HomeLanding;
