import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import HeartIcon from "@assets/heart.svg";

import stl from "./Card.module.scss";

const Card = ({
  background,
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

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.cardContainer}
    >
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: animation ? 0 : 300,
          opacity: animation ? 1 : 0,
        }}
        whileHover={{ y: -10, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        transition={{ delay: transitionDelay, type: "spring", stiffness: 50 }}
        style={{ width: width, height: height, background: background }}
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
