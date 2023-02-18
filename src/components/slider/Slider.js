import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ReviewCard from "@components/cards/review-card";

import PrevIcon from "@assets/arrow-prev.svg";
import NextIcon from "@assets/arrow-next.svg";

import stl from "./Slider.module.scss";

const Slider = ({
  content,
  scrollNum,
  backgroundSlider,
  backgroundCont,
  height,
  width,
  customClassSlider,
  customClassCont,
}) => {
  const [enableScroll, setEnableScroll] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [animation, setAnimation] = useState(false);

  setTimeout(() => {
    const ele = document.querySelector("#active");
    ele.style.width = `${progress}%`;
    if (progress === 0) {
      setIsPrevDisabled(true);
      setIsNextDisabled(false);
    } else if (progress === 100) {
      setIsPrevDisabled(false);
      setIsNextDisabled(true);
    }
  }, 100);

  const handlePrev = () => {
    setEnableScroll(true);
    const el = document.getElementById("scrollable");
    const width = el.offsetWidth - scrollNum;
    el.scrollLeft -= width;
    setEnableScroll(false);
  };

  const handleNext = () => {
    setEnableScroll(true);
    const el = document.getElementById("scrollable");
    const width = el.offsetWidth - scrollNum;
    el.scrollLeft += width;
    setEnableScroll(false);
  };

  const handleScroll = () => {
    const ele = document.getElementById("scrollable");
    const progress =
      (ele.scrollLeft / (ele.scrollWidth - ele.offsetWidth)) * 100;
    setProgress(progress);
  };

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      style={{ background: backgroundSlider }}
      className={clsx(stl.slider, customClassSlider)}
    >
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring", stiffness: 50 }}
        id="scrollable"
        style={{
          overflow: enableScroll ? "scroll" : "hidden",
          background: backgroundCont,
          width: width,
          height: height,
        }}
        onScroll={handleScroll}
        className={clsx(stl.container, customClassCont)}
      >
        {content.map((item) => item)}
      </motion.div>
      <div className={stl.btnContainer}>
        <button
          disabled={isPrevDisabled}
          id="prev"
          onClick={handlePrev}
          className={stl.prev}
        >
          <PrevIcon />
        </button>
        <div className={stl.progress}>
          <span className={stl.progressDef}></span>
          <span id="active" className={stl.progressActive}></span>
        </div>
        <button
          disabled={isNextDisabled}
          id="next"
          onClick={handleNext}
          className={stl.next}
        >
          <NextIcon />
        </button>
      </div>
    </motion.div>
  );
};

let array = [];
for (let i = 0; i < 20; i++) array.push(<ReviewCard key={i} />);

Slider.defaultProps = {
  content: array,
  scrollNum: 100,
};

Slider.propTypes = {
  content: PropTypes.array,
  scrollNum: PropTypes.number,
  backgroundSlider: PropTypes.string,
  backgroundCont: PropTypes.string,
  customClassSlider: PropTypes.string,
  customClassCont: PropTypes.string,
};

export default Slider;
