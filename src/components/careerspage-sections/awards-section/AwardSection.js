import { awards } from "@components/data/careers-data";

import stl from "./AwardSection.module.scss";

const AwardSection = () => {
  return (
    <div className={stl.awardSection}>
      <h1 className={stl.heading}>Award & Recongnition</h1>
      <div className={stl.awardContainer}>{awards.map((item) => item)}</div>
    </div>
  );
};

export default AwardSection;
