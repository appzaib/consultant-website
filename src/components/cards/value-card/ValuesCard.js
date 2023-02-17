import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Img from "@assets/value.svg";
import NextIcon from "@assets/arrow-right-long.svg";

import stl from "./ValuesCard.module.scss";

const ValuesCard = ({ width, height, icon, heading, desc, customClass }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.cardContainer, customClass)}
    >
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: animation ? 1 : 0, y: animation ? 0 : 300 }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ width: width, height: height }}
        className={stl.valueCard}
      >
        {icon}
        <h1 className={stl.heading}>{heading}</h1>
        <p className={stl.desc}>{desc}</p>
        <motion.button whileHover={{ paddingLeft: "20px" }} className={stl.btn}>
          <NextIcon />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

ValuesCard.defaultProps = {
  icon: <Img />,
  heading: "Lorem Ipsum",
  desc: "Irure occaecat officia irure minim eiusmod cupidatat. Non sit excepteur officia voluptate enim est tempor irure eu tempor. Adipisicing labore ullamco incididunt irure anim nulla veniam est fugiat ut. Dolore eu veniam esse ut laboris deserunt in exercitation irure.",
};

ValuesCard.propTypes = {
  icon: PropTypes.node,
  heading: PropTypes.string,
  desc: PropTypes.string,
  customClass: PropTypes.string,
};

export default ValuesCard;
