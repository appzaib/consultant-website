import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import HeartIcon from "@assets/heart.svg";

import stl from "./Card.module.scss";

const Card = ({
  variant,
  icon,
  imgSrc,
  imgAlt,
  heading,
  description,
  width,
  height,
  transitionDelay,
  animate,
  customClass,
}) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: animate ? 0 : 300, opacity: animate ? 1 : 0 }}
      transition={{ delay: transitionDelay }}
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
