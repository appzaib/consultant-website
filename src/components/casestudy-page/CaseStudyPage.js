import CaseStudySection from "@components/casestudy-section";
import Intro from "@components/intro";

import BGImage from "@assets/casestudy-intro.jpg";

const CaseStudyPage = () => (
  <>
    <Intro
      imgSrc={`${BGImage.src}`}
      heading="Success Stories: Real-World Examples of Our Work in Action"
      desc="Discover how we've helped businesses of all sizes and industries achieve success with our innovative and customized solutions."
      btnText="Schedule a Consultation"
    />
    <CaseStudySection />
  </>
);

export default CaseStudyPage;
