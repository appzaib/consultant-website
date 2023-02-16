import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import stl from "./WeAreHiring.module.scss";

const WeAreHiring = ({ heading, desc, customClass }) => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.weAreHiring, customClass)}
    >
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.info}
      >
        <h1 className={stl.title}>{heading}</h1>
        <p className={stl.desc}>{desc}</p>
      </motion.div>
    </motion.div>
  );
};

WeAreHiring.defaultProps = {
  heading: "We Are Hiring",
  desc: "We are excited to be expanding our team and are actively seeking talented and motivated individuals to join us in our mission to deliver exceptional web development services. We offer a dynamic and collaborative work environment that values innovation, creativity, and personal growth. If you're passionate about web development and want to work with a dedicated and enthusiastic team, we encourage you to apply and take the first step towards a rewarding career with us.",
};

WeAreHiring.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  customClass: PropTypes.string,
};

export default WeAreHiring;
