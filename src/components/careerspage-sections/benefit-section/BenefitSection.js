import { useState } from "react";
import { motion } from "framer-motion";

import { benefitCards } from "@components/data/case-study-data";

import stl from "./BenefitSection.module.scss";

const BenefitSection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.benefitSection}
    >
      <motion.h2
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring" }}
        className={stl.heading}
      >
        Our Perks and Benefits
      </motion.h2>
      <div className={stl.cardContainer}>
        {benefitCards.map((item) => item)}
      </div>
    </motion.div>
  );
};

export default BenefitSection;
