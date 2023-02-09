import Image from "next/image";

import Intro from "@components/intro";
import CareersSection from "@components/careers-section";
import SearchBox from "@components/search-box";
import JobCard from "@components/cards/job-card";

import BGImg from "@assets/careers-2.jpg";

import stl from "./CareersPage.module.scss";

const CareersPage = () => {
  let jobCards = [];
  for (let i = 0; i < 10; i++) {
    jobCards.push(<JobCard keyValue={i} />);
  }

  return (
    <div className={stl.careersPage}>
      {/* <Intro
        imgSrc={`${BGImg.src}`}
        alt="backgroun-image-careers"
        heading="World class design, agile delivery and product development"
        desc="200 experts who have served more than 500 international clients. Let's
        bring your idea to life!"
        icon={<ArrowNext />}
      /> */}
      <CareersSection />
      <div className={stl.weAreHiring}>
        <div className={stl.info}>
          <h1 className={stl.title}>Lorem Ipsum</h1>
          <p className={stl.desc}>
            Consequat tempor duis ipsum id cupidatat nostrud duis esse. Est
            labore excepteur ea adipisicing voluptate fugiat irure. Eiusmod
            cillum elit magna cillum mollit non qui aliqua laboris elit aliqua
            excepteur reprehenderit. Officia enim duis laborum consequat qui
            veniam enim ipsum exercitation laborum. Nisi aliqua labore elit quis
            proident laborum aliquip tempor qui laborum est. Fugiat fugiat elit
            ullamco magna. Nisi ex consequat duis sit dolore esse aute.
          </p>
        </div>
        <div className={stl.jobSection}>
          <SearchBox />
          <div className={stl.jobCards}>{jobCards.map((card) => card)}</div>
          <div className={stl.emailResume}></div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
