import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Imag from "@assets/consulting.jpg";
import ArrowNext from "@assets/arrow-right-2.svg";

import stl from "./Intro.module.scss";

const Intro = ({
  imgSrc,
  imgAlt,
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
    <div className={clsx(stl.intro, customClass)}>
      <Image
        src={imgSrc}
        height={100}
        width={100}
        alt={imgAlt}
        className={stl.bgImage}
      />
      <div className={stl.info}>
        <motion.h1
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: transitionDelayHeading }}
          className={stl.main}
        >
          {heading}
        </motion.h1>
        <motion.div
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: transitionDelayDesc }}
          className={stl.content}
        >
          {desc}
        </motion.div>
        <div className={stl.btnContainer}>
          <motion.button
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onMouseOver={() => setShowArrow(true)}
            onMouseOut={() => setShowArrow(false)}
            onClick={() => console.log("Clicked...")}
          >
            {btnText} {showArrow && <span>{icon}</span>}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

Intro.defaultProps = {
  imgSrc: `${Imag.src}`,
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
