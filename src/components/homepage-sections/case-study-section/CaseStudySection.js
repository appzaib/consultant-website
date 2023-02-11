import { useState } from "react";
import { motion } from "framer-motion";

import CaseStudyCard from "@components/cards/case-study-card";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./CaseStudySection.module.scss";

const CaseStudySection = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [btnAnimation, setBtnAnimation] = useState(false);

  const caseStudyCardArray = [
    <CaseStudyCard key={1} width="370px" />,
    <CaseStudyCard key={2} transitionDelay={0.2} width="370px" />,
    <CaseStudyCard key={3} transitionDelay={0.4} width="370px" />,
  ];

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
          Incididunt adipisicing magna voluptate ad non.
        </motion.p>
      </motion.div>
      <motion.div id="caseStudyCont" className={stl.cardContainer}>
        {caseStudyCardArray.map((card) => card)}
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
        <ReadMoreBtn variant="secondary" />
      </motion.div>
    </div>
  );
};

export default CaseStudySection;
