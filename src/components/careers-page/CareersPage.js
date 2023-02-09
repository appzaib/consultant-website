import Intro from "@components/intro";
import UpperSection from "@components/careers-sections/upper-section";
import WeAreHiring from "@components/careers-sections/we-are-hiring";
import JobSection from "@components/careers-sections/job-section";
import BenefitSection from "@components/careers-sections/benefit-section";
import ValuesSection from "@components/careers-sections/our-values-section";

import BGImg from "@assets/careers-2.jpg";

import stl from "./CareersPage.module.scss";

const CareersPage = () => {
  return (
    <div className={stl.careersPage}>
      <Intro
        imgSrc={`${BGImg.src}`}
        alt="backgroun-image-careers"
        heading="World class design, agile delivery and product development"
        desc="200 experts who have served more than 500 international clients. Let's
        bring your idea to life!"
        icon={<ArrowNext />}
      />
      <UpperSection />
      <WeAreHiring />
      <JobSection />
      <BenefitSection />
      <ValuesSection />
    </div>
  );
};

export default CareersPage;
