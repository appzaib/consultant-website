import clsx from "clsx";
import PropTypes from "prop-types";

import Arrow from "@assets/arrow-next-2.svg";

import stl from "./ReadMoreBtn.module.scss";

const ReadMoreBtn = ({ variant, btnText, link, customClass }) => (
  <button
    id="btn"
    onClick={() => (location.href = link)}
    className={clsx(stl[variant], customClass)}
  >
    <span className={stl.circle} aria-hidden="true">
      <span className={clsx(stl.icon, stl.arrow)}></span>
    </span>
    <span className={stl.btnText}>
      {btnText}{" "}
      {variant === "secondary" && (
        <span className={stl.icon2}>
          <Arrow />
        </span>
      )}
    </span>
  </button>
);

ReadMoreBtn.defaultProps = {
  variant: "primary",
  btnText: "Read More",
  link: "",
};

ReadMoreBtn.propTypes = {
  variant: PropTypes.string,
  btnText: PropTypes.string,
  link: PropTypes.string,
  customClass: PropTypes.string,
};

export default ReadMoreBtn;
