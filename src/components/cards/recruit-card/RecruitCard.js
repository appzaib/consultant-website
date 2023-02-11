import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import stl from "./RecruitCard.module.scss";

const RecruitCard = ({
  width,
  height,
  background,
  step,
  title,
  desc,
  initial,
  whileInView,
  top,
  bottom,
  left,
  right,
  customClass,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ type: "spring", stiffness: 50 }}
      style={{
        width: width,
        height: height,
        background: background,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}
      className={clsx(stl.recruitCard, customClass)}
    >
      <h1 className={stl.title}>{title}</h1>
      <p className={stl.desc}>{desc}</p>
    </motion.div>
  );
};

RecruitCard.defaultProps = {
  step: "01",
  title: "Lorem Ipsum",
  desc: "Sunt laboris do excepteur commodo commodo exercitation adipisicing pariatur duis aliquip. Deserunt quis ea et Lorem proident cupidatat officia excepteur aliquip pariatur esse culpa exercitation ex. Cupidatat laboris incididunt nulla sint eiusmod mollit minim ut et officia.",
  initial: { x: -300, rotate: 25 },
  whileInView: { x: 0, rotate: 0 },
};

RecruitCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  customClass: PropTypes.string,
};

export default RecruitCard;
