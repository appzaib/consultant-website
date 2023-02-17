import { upperSection } from "@components/data/careers-data";

import stl from "./UpperSecCont.module.scss";

const UpperSecCont = () => (
  <div className={stl.upperSecCont}>
    {upperSection.map((section) => section)}
  </div>
);

export default UpperSecCont;
