import PropTypes from "prop-types";

import stl from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => {
  return <div style={{ width: progress + "%" }} className={stl.progress}></div>;
};

ProgressBar.defaultProps = {
  progress: 75,
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
