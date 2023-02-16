import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ReadMoreBtn from "@components/read-more-btn";

import WebDevImage from "@assets/web-dev.webp";
import WebDevImage2 from "@assets/web-dev-2.png";

import stl from "./PrimaryCard.module.scss";

const PrimaryCard = ({
  imgSrc,
  imgSrc2,
  imgAlt,
  imgAlt2,
  heading,
  description,
  list,
  btnText,
  link,
  transitionDelay,
  customClass,
}) => {
  const [flip, setFlip] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [transDelay, setTransDelay] = useState(false);

  const handleAnimation = () => {
    setAnimation(true);
    setTransDelay(true);

    setTimeout(() => {
      setTransDelay(false);
    }, 200);
  };

  return (
    <motion.div
      onViewportEnter={handleAnimation}
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
      className={clsx(stl.primaryCard, customClass)}
    >
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{
          y: animation ? 0 : 250,
          rotateY: flip ? 180 : 0,
          opacity: animation ? 1 : 0,
        }}
        transition={{
          delay: transDelay ? transitionDelay : 0,
          type: "spring",
          stiffness: 50,
        }}
        exit={{ rotateY: 90 }}
        className={stl.cardFront}
      >
        <Image
          priority={true}
          src={imgSrc}
          height={100}
          width={100}
          alt={imgAlt}
          className={stl.img}
        />
        <div className={stl.content}>
          <p className={stl.heading}>{heading}</p>
          <p className={stl.desc}>{description}</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotateY: flip ? 0 : -180 }}
        transition={{
          delay: transDelay ? transitionDelay : 0,
          type: "spring",
          stiffness: 50,
        }}
        className={stl.cardBack}
      >
        <Image
          src={imgSrc2}
          width={100}
          height={100}
          alt={imgAlt2}
          className={stl.img}
        />
        <ul className={stl.list}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ReadMoreBtn link="/services.html" />
      </motion.div>
    </motion.div>
  );
};

PrimaryCard.defaultProps = {
  imgSrc: `${WebDevImage.src}`,
  imgSrc2: `${WebDevImage2.src}`,
  imgAlt: "Web Dev Image",
  imgAlt2: "Web Dev Image2",
  heading: "Web Development",
  description:
    "Fugiat laborum pariatur laborum est. Fugiat ullamco esse sunt commodo eu adipisicing sint dolore elit est dolor. Minim nisi reprehenderit ex ut ea ipsum excepteur exercitation laborum nostrud tempor dolore. Est duis proident aute minim ullamco dolore aute eiusmod veniam tempor aliqua deserunt sit.",
  list: [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
};

PrimaryCard.propTypes = {
  imgSrc: PropTypes.string,
  imgSrc2: PropTypes.string,
  imgAlt: PropTypes.string,
  imgAlt2: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
  btnText: PropTypes.string,
  link: PropTypes.string,
  customClass: PropTypes.string,
};

export default PrimaryCard;
