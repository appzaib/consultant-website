import { valueCards } from "@components/data/careers-data";

import stl from "./ValuesSection.module.scss";

const ValuesSection = () => {
  return (
    <div className={stl.ourValues}>
      <h2 className={stl.heading}>Our Values</h2>
      <div className={stl.cardContainer}>{valueCards.map((item) => item)}</div>
    </div>
  );
};

export default ValuesSection;
