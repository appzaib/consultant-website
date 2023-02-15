import PropTypes from "prop-types";

import UpperSection from "@components/careerspage-sections/upper-section";

import stl from "./UpperSecCont.module.scss";

const UpperSecCont = () => (
  <div className={stl.upperSecCont}>
    <UpperSection />
    <UpperSection imgPosition="left" />
    <UpperSection />
  </div>
);

UpperSecCont.defaultProps = {
  num: 3,
};

UpperSecCont.propTypes = {
  num: PropTypes.number,
};

export default UpperSecCont;
