import TopIcon from "@assets/arrow-top.svg";

import stl from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  return (
    <button
      onClick={() => {
        document.body.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={stl.scrollTopBtn}
    >
      <TopIcon />
    </button>
  );
};

export default ScrollToTop;
