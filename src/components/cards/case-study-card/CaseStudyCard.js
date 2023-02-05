import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

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
  customClass,
}) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  return (
    <div
      style={{ width: width, height: height }}
      onClick={() => {
        isTouchDevice && console.log("Clicked...");
      }}
      onMouseOver={() => {
        if (isTouchDevice === false) {
          setShowFullContent(true);
        }
      }}
      onMouseOut={() => {
        if (isTouchDevice === false) {
          setShowFullContent(false);
        }
      }}
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
    </div>
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