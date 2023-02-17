import { useState } from "react";
import { motion } from "framer-motion";

import { description, caseStudies1 } from "@components/data/case-study-data";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./CaseStudySection.module.scss";

const CaseStudySection = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [btnAnimation, setBtnAnimation] = useState(false);

  return (
    <div className={stl.caseStudySection}>
      <motion.div
        onViewportEnter={() => setTextAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ opacity: 0, x: 800 }}
          animate={{
            opacity: textAnimation ? 1 : 0,
            x: textAnimation ? 0 : 80,
          }}
          transition={{ type: "spring" }}
          className={stl.title}
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 800 }}
          animate={{
            opacity: textAnimation ? 1 : 0,
            x: textAnimation ? 0 : 80,
          }}
          transition={{ type: "spring" }}
          className={stl.desc}
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div id="caseStudyCont" className={stl.cardContainer}>
        {caseStudies1.map((card) => card)}
      </motion.div>
      <motion.div
        onViewportEnter={() => setBtnAnimation(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: btnAnimation ? 1 : 0,
          opacity: btnAnimation ? 1 : 0,
        }}
        className={stl.btnContainer}
      >
        <ReadMoreBtn link="/casestudy.html" variant="secondary" />
      </motion.div>
    </div>
  );
};

export default CaseStudySection;
