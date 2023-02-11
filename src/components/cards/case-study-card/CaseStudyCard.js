import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ReadMoreBtn from "@components/read-more-btn";

import Img from "@assets/case-study-1.webp";

import stl from "./CaseStudyCard.module.scss";

const CaseStudyCard = ({
  width,
  height,
  imgSrc,
  imgAlt,
  title,
  description,
  btnText,
  transitionDelay,
  customClass,
}) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.caseCardContainer}
    >
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        animate={{
          y: animation ? 0 : 250,
          opacity: animation ? 1 : 0,
        }}
        transition={{ delay: transitionDelay, duration: 0.3 }}
        style={{ width: width, height: height }}
        onMouseOver={() => setShowFullContent(true)}
        onMouseOut={() => setShowFullContent(false)}
        className={clsx(stl.caseStudyCard, customClass)}
      >
        <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={imgAlt}
          className={stl.img}
        />
        <div
          id="content"
          className={clsx(
            stl.content,
            showFullContent ? stl.showFullContent : undefined
          )}
        >
          <h1 className={stl.title}>{title}</h1>
          <p id="desc" className={stl.desc}>
            {description}
          </p>
          <div className={stl.btnContainer}>
            <ReadMoreBtn btnText={btnText} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

CaseStudyCard.defaultProps = {
  imgSrc: `${Img.src}`,
  imgAlt: "case-study-img",
  title: "iFightDepression",
  description:
    "Est ad minim anim amet ut. Culpa cillum sint ex duis consequat dolore aliquip. Nulla ipsum occaecat veniam cillum pariatur nostrud deserunt amet exercitation ad. Eiusmod est officia ea ut magna tempor eiusmod ea irure. Quis cillum adipisicing consequat ullamco eiusmod. Qui tempor nisi veniam culpa fugiat sit mollit eiusmod.",
  btnText: "Read More",
};

CaseStudyCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  btnText: PropTypes.string,
  customClass: PropTypes.string,
};

export default CaseStudyCard;
