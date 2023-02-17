import { jobCards } from "@components/data/careers-data";

import SearchBox from "@components/search-box";
import ContactUsCard from "@components/cards/contact-us-card";

import stl from "./JobSection.module.scss";

const JobSection = () => {
  return (
    <div className={stl.jobSection}>
      <SearchBox />
      <div className={stl.jobCards}>{jobCards.map((card) => card)}</div>
      <div className={stl.foundJobNot}>
        <ContactUsCard desc="If you do not find a suitable job on our website, please do not hesitate to send us your CV and a cover letter to our email address. We are always looking for talented and motivated individuals to join our team, and we would be happy to review your application for any future job openings. Thank you for your interest in our company, and we wish you the best of luck in your job search." />
      </div>
    </div>
  );
};

export default JobSection;
