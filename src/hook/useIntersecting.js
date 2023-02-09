import { useEffect } from "react";
import PropTypes from "prop-types";

const useIntersecting = ({
  ele,
  customFunc = () => console.log("Running useIntersecting..."),
  threshold = 0.25,
}) =>
  useEffect(() => {
    let options = {
      threshold: threshold,
    };

    const observer = new IntersectionObserver(callback, options);

    function callback(entries) {
      if (entries[0].isIntersecting) {
        customFunc();
      }
    }

    observer.observe(ele);
  }, [ele]);

useIntersecting.propTypes = {
  ele: PropTypes.element.isRequired,
  customFunc: PropTypes.func.isRequired,
  threshold: PropTypes.number.isRequired,
};

export default useIntersecting;
