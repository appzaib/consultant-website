import Intro from "@components/intro";
import UpperSecCont from "@components/upper-section-container";
import WeAreHiring from "@components/careerspage-sections/we-are-hiring";
import JobSection from "@components/careerspage-sections/job-section";
import BenefitSection from "@components/careerspage-sections/benefit-section";
import ValuesSection from "@components/careerspage-sections/our-values-section";
import BlogSection from "@components/careerspage-sections/blog-section";
import AwardSection from "@components/careerspage-sections/awards-section";

import stl from "./CareersPage.module.scss";

const CareersPage = () => (
  <div className={stl.careersPage}>
    <Intro />
    <UpperSecCont />
    <div className={stl.divider} />
    <WeAreHiring />
    <div className={stl.divider} />
    <JobSection />
    <div className={stl.divider} />
    <BenefitSection />
    <div className={stl.divider} />
    <ValuesSection />
    <div className={stl.divider} />
    <BlogSection />
    <div className={stl.divider} />
    <AwardSection />
  </div>
);

export default CareersPage;
