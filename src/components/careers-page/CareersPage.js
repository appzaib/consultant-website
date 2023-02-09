import Intro from "@components/intro";

import BGImg from "@assets/careers-2.jpg";

import stl from "./CareersPage.module.scss";

const CareersPage = () => {
  return (
    <div className={stl.careersPage}>
      <Intro imgSrc={`${BGImg.src}`} alt="backgroun-image-careers" />
    </div>
  );
};

export default CareersPage;
