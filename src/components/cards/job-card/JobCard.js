import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import SaveIcon from "@assets/bookmark.svg";

import stl from "./JobCard.module.scss";

const JobCard = ({
  keyValue,
  width,
  height,
  jobTitle,
  jobSalary,
  labels,
  postInfo,
  customClass,
}) => {
  const [saved, setSaved] = useState(false);
  const [animation, setAnimtion] = useState(false);

  return (
    <motion.div
      key={keyValue}
      onViewportEnter={() => setAnimtion(true)}
      className={clsx(stl.jobCardContainer, customClass)}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: animation ? 1 : 0, y: animation ? 0 : 400 }}
        style={{ width: width, height: height }}
        className={stl.jobCard}
      >
        <SaveIcon
          className={clsx(stl.icon, saved ? stl.fill : undefined)}
          onClick={() => {
            console.log("Clicked...");
            setSaved(!saved);
          }}
        />
        <div className={stl.title}>{jobTitle}</div>
        <div className={stl.salary}>{jobSalary}</div>
        <div className={stl.labels}>
          {labels.map((label, i) => (
            <span key={i} className={stl.label}>
              {label}
            </span>
          ))}
        </div>
        <div className={stl.footer}>
          <div className={stl.postInfo}>Posted: {postInfo}</div>
          <button className={stl.applyBtn}>Apply</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

JobCard.defaultProps = {
  jobTitle: "Sr.Lorem Ipsum",
  jobSalary: "$1000k - $1500k",
  labels: ["Lorem", "Lorem", "Lorem"],
  postInfo: "2 Days ago",
};

JobCard.propTypes = {
  jobTitle: PropTypes.string,
  jobSalary: PropTypes.string,
  labels: PropTypes.array,
  postInfo: PropTypes.string,
  customClass: PropTypes.string,
};

export default JobCard;
