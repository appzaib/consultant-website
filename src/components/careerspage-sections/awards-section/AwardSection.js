import AwardCard from "@components/cards/award-card";

import stl from "./AwardSection.module.scss";

const AwardSection = () => {
  let awards = [];
  for (let i = 0; i < 6; i++) {
    awards.push(<AwardCard key={i} />);
  }

  return (
    <div className={stl.awardSection}>
      <h1 className={stl.heading}>Award & Recongnition</h1>
      <div className={stl.awardContainer}>{awards.map((item) => item)}</div>
    </div>
  );
};

export default AwardSection;
