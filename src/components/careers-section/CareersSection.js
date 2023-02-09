import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import CareersImg from "@assets/careers-3.jpg";

import stl from "./CareersSection.module.scss";

const CareersSection = ({
  imgSrc,
  imgAlt,
  heading,
  desc,
  imgPosition,
  customClass,
}) => {
  const [animation, setAnimtion] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimtion(true)}
      className={clsx(stl.careersSecCont, customClass)}
    >
      {imgPosition === "left" ? (
        <div className={stl.section}>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : -500 }}
            className={stl.text}
          >
            <h1 className={stl.heading}>{heading}</h1>
            <p className={stl.desc}>{desc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 500 }}
            className={stl.imgContainer}
          >
            <Image
              src={imgSrc}
              width={100}
              height={100}
              alt={imgAlt}
              className={stl.img}
            />
          </motion.div>
        </div>
      ) : (
        <div className={stl.section}>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : -500 }}
            className={stl.imgContainer}
          >
            <Image
              src={imgSrc}
              width={100}
              height={100}
              alt={imgAlt}
              className={stl.img}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 500 }}
            className={stl.text}
          >
            <h1 className={stl.heading}>{heading}</h1>
            <p className={stl.desc}>{desc}</p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

CareersSection.defaultProps = {
  imgSrc: `${CareersImg.src}`,
  imgAlt: "careers-img",
  imgPosition: "right",
  heading: "In sit minim irure qui culpa esse aliqua commodo.",
  desc: "Proident laborum cupidatat laborum mollit qui ea esse. Cupidatat fugiat tempor enim et enim Lorem dolore et consectetur ut ex qui anim. Aliquip quis voluptate tempor laboris. Laboris quis tempor veniam eiusmod duis ea proident non duis anim proident. Ut non pariatur ullamco dolore fugiat pariatur ipsum aliqua ipsum ut aute.",
};

CareersSection.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgPosition: PropTypes.string,
  heading: PropTypes.string,
  desc: PropTypes.string,
  customClass: PropTypes.string,
};

export default CareersSection;
