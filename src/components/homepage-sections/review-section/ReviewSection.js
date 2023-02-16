import { useState } from "react";
import { motion } from "framer-motion";

import Slider from "@components/slider";
import reviews from "@components/data/review-data";

import stl from "./ReviewSection.module.scss";

const ReviewSection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.reviewSection}>
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            x: animation ? 0 : 1000,
            opacity: animation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.heading}
        >
          What customers are saying about us?
        </motion.h1>
        <motion.p
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            x: animation ? 0 : 1000,
            opacity: animation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          We're very pleased with all the positive feedback we've received over
          the years. Thank you to all of our clients across the globe who
          continue to put their faith in us.
        </motion.p>
      </motion.div>
      <Slider content={reviews} />
    </div>
  );
};

export default ReviewSection;
