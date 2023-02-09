import Intro from "@components/intro";
import UpperSection from "@components/careers-sections/upper-section";
import WeAreHiring from "@components/careers-sections/we-are-hiring";
import JobSection from "@components/careers-sections/job-section";
import BenefitSection from "@components/careers-sections/benefit-section";
import ValuesSection from "@components/careers-sections/our-values-section";

import stl from "./CareersPage.module.scss";

const CareersPage = () => {
  return (
    <div className={stl.careersPage}>
      <Intro />
      <UpperSection />
      <WeAreHiring />
      <JobSection />
      <BenefitSection />
      <ValuesSection />
    </div>
  );
};

export default CareersPage;
