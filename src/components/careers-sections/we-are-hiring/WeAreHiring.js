import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import stl from "./WeAreHiring.module.scss";

const WeAreHiring = ({ heading, desc, customClass }) => {
  const [animation, setAnimation] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.container, customClass)}
    >
      <div className={stl.weAreHiring}>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
          transition={{ type: "spring" }}
          className={stl.info}
        >
          <h1 className={stl.title}>{heading}</h1>
          <p className={stl.desc}>{desc}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

WeAreHiring.defaultProps = {
  heading: "Lorem Ipsum",
  desc: "Consequat tempor duis ipsum id cupidatat nostrud duis esse. Est labore excepteur ea adipisicing voluptate fugiat irure. Eiusmod cillum elit magna cillum mollit non qui aliqua laboris elit aliqua excepteur reprehenderit. Officia enim duis laborum consequat qui veniam enim ipsum exercitation laborum. Nisi aliqua labore elit quis proident laborum aliquip tempor qui laborum est. Fugiat fugiat elit ullamco magna. Nisi ex consequat duis sit dolore esse aute.",
};

WeAreHiring.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  customClass: PropTypes.string,
};

export default WeAreHiring;
