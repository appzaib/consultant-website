import Intro from "@components/intro";
import UpperSection from "@components/careerspage-sections/upper-section";
import WeAreHiring from "@components/careerspage-sections/we-are-hiring";
import JobSection from "@components/careerspage-sections/job-section";
import BenefitSection from "@components/careerspage-sections/benefit-section";
import ValuesSection from "@components/careerspage-sections/our-values-section";
import BlogSection from "@components/careerspage-sections/blog-section";
import AwardSection from "@components/careerspage-sections/awards-section";

import stl from "./CareersPage.module.scss";

const CareersPage = () => {
  const upperSections = [
    <UpperSection key={1} />,
    <UpperSection imgPosition="left" key={2} />,
    <UpperSection key={3} />,
  ];

  return (
    <div className={stl.careersPage}>
      <Intro />
      {upperSections.map((section) => section)}
      <div className={stl.divider}></div>
      <WeAreHiring />
      <div className={stl.divider}></div>
      <JobSection />
      <div className={stl.divider}></div>
      <BenefitSection />
      <div className={stl.divider}></div>
      <ValuesSection />
      <div className={stl.divider}></div>
      <BlogSection />
      <div className={stl.divider}></div>
      <AwardSection />
    </div>
  );
};

export default CareersPage;
