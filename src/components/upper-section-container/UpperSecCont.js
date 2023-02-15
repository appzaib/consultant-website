import PropTypes from "prop-types";

import UpperSection from "@components/careerspage-sections/upper-section";

const UpperSecCont = () => (
  <>
    <UpperSection />
    <UpperSection imgPosition="left" />
    <UpperSection />
  </>
);

UpperSecCont.defaultProps = {
  num: 3,
};

UpperSecCont.propTypes = {
  num: PropTypes.number,
};

export default UpperSecCont;
