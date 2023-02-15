import Intro from "@components/intro";
import UpperSecCont from "@components/upper-section-container";
import RecruitProcess from "@components/recruit-process";
import ShowcaseContainer from "@components/showcase-container";
import BlogSection from "@components/careerspage-sections/blog-section";

const HowWeWorkPage = () => (
  <>
    <Intro />
    <UpperSecCont />
    <RecruitProcess heading="How We Work" />
    <ShowcaseContainer />
    <BlogSection />
  </>
);

export default HowWeWorkPage;
