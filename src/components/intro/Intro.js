import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";

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
        <h1 className={stl.heading}>{heading}</h1>
        <div className={stl.desc}>{desc}</div>
        <div className={stl.btnContainer}>
          <button
            onMouseOver={() => {
              setShowArrow(true);
            }}
            onMouseOut={() => {
              setShowArrow(false);
            }}
            onClick={() => {
              console.log("Clicked...");
              // location.href = link;
            }}
          >
            {btnText} {showArrow && <span>{icon}</span>}
          </button>
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
