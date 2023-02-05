import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import ReviewCard from "@components/cards/review-card";

import PrevIcon from "@assets/arrow-prev.svg";
import NextIcon from "@assets/arrow-next.svg";

import stl from "./Slider.module.scss";

const Slider = ({
  content,
  scrollNum,
  backgroundSlider,
  backgroundCont,
  customClassSlider,
  customClassCont,
}) => {
  const [enableScroll, setEnableScroll] = useState(false);
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    setTimeout(() => {
      const ele = document.getElementById("active");
      ele.style.width = `${progress}%`;
    }, 50);
  }

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
    <div
      style={{ background: backgroundSlider }}
      className={clsx(stl.slider, customClassSlider)}
    >
      <div
        id="scrollable"
        style={{
          overflow: enableScroll ? "scroll" : "hidden",
          background: backgroundCont,
        }}
        onScroll={handleScroll}
        className={clsx(stl.container, customClassCont)}
      >
        {content.map((item) => item)}
      </div>
      <div className={stl.btnContainer}>
        <button id="prev" onClick={handlePrev} className={stl.prev}>
          <PrevIcon />
        </button>
        <div className={stl.progress}>
          <span className={stl.progressDef}></span>
          <span id="active" className={stl.progressActive}></span>
        </div>
        <button id="next" onClick={handleNext} className={stl.next}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

let array = [];

for (let i = 0; i < 20; i++) {
  array.push(<ReviewCard key={i} />);
}

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
