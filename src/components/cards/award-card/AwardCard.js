import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import AwardImage from "@assets/award.png";

import stl from "./AwardCard.module.scss";

const AwardCard = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  desc,
  customClass,
}) => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.container, customClass)}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        animate={{
          opacity: animation ? 1 : 0,
          y: animation ? 0 : 300,
        }}
        transition={{ type: "spring" }}
        className={stl.awardCard}
      >
        <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} />
        <span className={stl.title}>{title}</span>
        <p className={stl.desc}>{desc}</p>
      </motion.div>
    </motion.div>
  );
};

AwardCard.defaultProps = {
  imgSrc: `${AwardImage.src}`,
  imgAlt: "award-image",
  title: "Horizon Award 2021",
  desc: "Web Development",
  imgWidth: 250,
  imgHeight: 250,
};

AwardCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default AwardCard;
