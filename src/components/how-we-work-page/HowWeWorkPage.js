import Image from "next/image";

import Intro from "@components/intro";
import UpperSection from "@components/careerspage-sections/upper-section";
import RecruitProcess from "@components/recruit-process";

import stl from "./HowWeWorkPage.module.scss";
import ShowcaseContainer from "@components/showcase-container";
import BlogSection from "@components/careerspage-sections/blog-section";

const HowWeWorkPage = () => {
  return (
    <div className={stl.hwwPage}>
      <Intro />
      <UpperSection />
      <UpperSection imgPosition="left" />
      <UpperSection />
      <RecruitProcess />
      <ShowcaseContainer />
      <BlogSection />
    </div>
  );
};

export default HowWeWorkPage;
