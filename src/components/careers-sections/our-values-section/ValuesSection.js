import ValuesCard from "@components/cards/value-card";

import stl from "./ValuesSection.module.scss";

const ValuesSection = () => {
  let valueCards = [];
  for (let i = 0; i < 6; i++) {
    valueCards.push(<ValuesCard key={i} />);
  }
  return (
    <div className={stl.container}>
      <div className={stl.ourValues}>
        <h2 className={stl.heading}>Lorem Ipsum</h2>
        <div className={stl.cardContainer}>
          {valueCards.map((item) => item)}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
