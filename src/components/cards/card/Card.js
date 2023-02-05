import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";

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
  customClass,
}) => {
  return (
    <div
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
    </div>
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
