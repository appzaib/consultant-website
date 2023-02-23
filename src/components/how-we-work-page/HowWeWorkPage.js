import { useState, useEffect } from "react";

import Intro from "@components/intro";
import UpperSecCont from "@components/upper-section-container";
import RecruitProcessVer from "@components/recruit-process-ver";
import RecruitProcessHor from "@components/recruit-process-hor";
import ShowcaseContainer from "@components/showcase-container";
import BlogSection from "@components/careerspage-sections/blog-section";

import BGImage from "@assets/how-we-work-intro.jpg";

import stl from "./hwwPage.module.scss";

const HowWeWorkPage = () => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1030) {
        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={stl.hwwPage}>
      <Intro
        imgSrc={`${BGImage.src}`}
        heading="Our Process for Crafting Successful Web Solutions"
        desc="A Consultation Model"
        btnText="Schedule a Consultation"
      />
      <UpperSecCont />
      {isVertical ? <RecruitProcessVer /> : <RecruitProcessHor />}
      <ShowcaseContainer />
      <BlogSection />
    </div>
  );
};

export default HowWeWorkPage;
