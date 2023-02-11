import CaseStudyCard from "@components/cards/case-study-card";
import Intro from "@components/intro";

import stl from "./CaseStudyPage.module.scss";

const CaseStudyPage = () => {
  let cases = [];
  for (let i = 0; i < 20; i++) {
    cases.push(<CaseStudyCard key={i} />);
  }
  return (
    <div className={stl.casestudyPage}>
      <Intro />
      <div className={stl.container}>{cases.map((item) => item)}</div>
    </div>
  );
};

export default CaseStudyPage;
