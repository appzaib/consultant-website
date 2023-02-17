import Intro from "@components/intro";
import UpperSecCont from "@components/upper-section-container";
import RecruitProcess from "@components/recruit-process";
import ShowcaseContainer from "@components/showcase-container";
import BlogSection from "@components/careerspage-sections/blog-section";

import stl from "./hwwPage.module.scss";

const HowWeWorkPage = () => (
  <div className={stl.hwwPage}>
    <Intro
      heading="Our Process for Crafting Successful Web Solutions"
      desc="A Consultation Model"
      btnText="Schedule a Consultation"
    />
    <UpperSecCont />
    <RecruitProcess heading="How We Work" />
    <ShowcaseContainer />
    <BlogSection />
  </div>
);

export default HowWeWorkPage;
