import Intro from "@components/intro";
import SkillsSection from "@components/homepage-sections/skills-section";
import ReviewSection from "@components/homepage-sections/review-section";
import CaseStudySection from "@components/homepage-sections/case-study-section";
import HWWSection from "@components/homepage-sections/how-we-work-section";
import CareersSection from "@components/homepage-sections/career-section";

import stl from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={stl.home}>
      <Intro btnText="Get in Touch" />
      <SkillsSection />
      <div className={stl.divider} />
      <ReviewSection />
      <div className={stl.divider} />
      <CaseStudySection />
      <div className={stl.divider} />
      <HWWSection />
      <div className={stl.divider} />
      <CareersSection />
    </div>
  );
};

export default Homepage;
