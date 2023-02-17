import { upperSection } from "@components/data/careers-data";

const UpperSecCont = () => (
  <div className={stl.upperSecCont}>
    {upperSection.map((section) => section)}
  </div>
);

export default UpperSecCont;
