import { useEffect } from "react";
import PropTypes from "prop-types";

const useIntersecting = ({ ele, customFunc, threshold }) =>
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

export default useIntersecting;

useIntersecting.propTypes = {
  ele: PropTypes.element.isRequired,
  customFunc: PropTypes.func.isRequired,
  threshold: PropTypes.number.isRequired,
};
