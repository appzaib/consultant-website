import SearchBox from "@components/search-box";
import JobCard from "@components/cards/job-card";
import ContactUsCard from "@components/cards/contact-us-card";

import stl from "./JobSection.module.scss";

const JobSection = () => {
  let jobCards = [];
  for (let i = 0; i < 10; i++) {
    jobCards.push(<JobCard key={i} />);
  }
  return (
    <div className={stl.jobSection}>
      <SearchBox />
      <div className={stl.jobCards}>{jobCards.map((card) => card)}</div>
      <div className={stl.foundJobNot}>
        <ContactUsCard />
      </div>
    </div>
  );
};

export default JobSection;
