import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import BGImg from "@assets/consulting.jpg";
import ArrowNext from "@assets/arrow-right-2.svg";

import stl from "./Intro.module.scss";

const Intro = ({
  imgSrc,
  heading,
  desc,
  btnText,
  icon,
  link,
  transitionDelayHeading,
  transitionDelayDesc,
  customClass,
}) => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <div
      style={{
        background: `url(${BGImg.src}) , linear-gradient(
          -45deg,
          rgba(30, 143, 255, 0.5),
          rgba(5, 152, 98, 0.5)
          )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
      className={clsx(stl.intro, customClass)}
    >
      <div className={stl.content}>
        <motion.h1
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: transitionDelayHeading,
            type: "spring",
            stiffness: 50,
          }}
          className={stl.heading}
        >
          {heading}
        </motion.h1>
        <motion.div
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: transitionDelayDesc,
            type: "spring",
            stiffness: 50,
          }}
          className={stl.desc}
        >
          {desc}
        </motion.div>
        <div className={stl.btnContainer}>
          <motion.button
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
            onMouseOver={() => setShowArrow(true)}
            onMouseOut={() => setShowArrow(false)}
            onClick={() => (location.href = "/contact")}
            className={stl.btn}
          >
            {btnText} {showArrow && <span>{icon}</span>}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

Intro.defaultProps = {
  imgSrc: `${BGImg.src}`,
  imgAlt: "background-image",
  heading: "World class design, agile delivery and product development",
  desc: "200 experts who have served more than 500 international clients. Let's bring your idea to life!",
  btnText: "Get in Touch",
  icon: <ArrowNext />,
};

Intro.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  heading: PropTypes.string,
  desc: PropTypes.string,
  btnText: PropTypes.string,
  icon: PropTypes.node,
};

export default Intro;
