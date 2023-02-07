import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import HeartIcon from "@assets/heart.svg";

import stl from "./Card.module.scss";

const Card = ({
  key,
  variant,
  icon,
  imgSrc,
  imgAlt,
  heading,
  description,
  width,
  height,
  transitionDelay,
  customClass,
}) => {
  const [animation, setAnimation] = useState(false);

  const handleCardAnimation = () => {
    setAnimation(true);
  };
  return (
    <motion.div
      onViewportEnter={handleCardAnimation}
      className={stl.cardContainer}
      key={key}
    >
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: animation ? 0 : 300, opacity: animation ? 1 : 0 }}
        transition={{ delay: transitionDelay, duration: 0.3 }}
        style={{ width: width, height: height }}
        className={clsx(stl.card, stl[variant], customClass)}
      >
        {icon !== "undefined" && <div className={stl.icon}>{icon}</div>}
        {typeof imgSrc !== "undefined" && (
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt={imgAlt}
            className={stl.img}
          />
        )}
        <h2 className={stl.heading}>{heading}</h2>
        <p className={stl.desc}>{description}</p>
      </motion.div>
    </motion.div>
  );
};

Card.defaultProps = {
  variant: "primary",
  icon: <HeartIcon />,
  heading: "96%",
  description: "Happy Clients",
};

Card.propTypes = {
  icon: PropTypes.node,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
};

export default Card;
