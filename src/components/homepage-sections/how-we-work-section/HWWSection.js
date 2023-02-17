import { useState } from "react";
import { motion } from "framer-motion";

import {
  description,
  howWeWorkCards,
  briefInfo,
} from "@components/data/how-we-work-data";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./HWWSection.module.scss";

const HWWSection = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [btnAnimation, setBtnAnimation] = useState(false);
  const [briefInfoAnimation, setBreifInfoAnimation] = useState(false);

  return (
    <div className={stl.hwwSection}>
      <motion.div
        onViewportEnter={() => setTextAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ x: 1000, opacity: 0 }}
          animate={{
            x: textAnimation ? 0 : 1000,
            opacity: textAnimation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.title}
        >
          Discover How We Deliver Your Products
        </motion.h1>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          animate={{
            x: textAnimation ? 0 : 1000,
            opacity: textAnimation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div className={stl.cardContainer}>
        {howWeWorkCards.map((card) => card)}
      </motion.div>
      <motion.p
        onViewportEnter={() => setBreifInfoAnimation(true)}
        className={stl.description}
      >
        {briefInfo.map((item, i) => (
          <motion.span
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: briefInfoAnimation ? 1 : 0,
              y: briefInfoAnimation ? 0 : 200,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            key={i}
            className={stl.descr}
          >
            <span className={stl.primary}>{item.num}</span>
            <span className={stl.secondary}>{item.name}</span>
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        onViewportEnter={() => setBtnAnimation(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: btnAnimation ? 1 : 0,
          opacity: btnAnimation ? 1 : 0,
        }}
        className={stl.btnContainer}
      >
        <ReadMoreBtn link="/how-we-work" variant="secondary" />
      </motion.div>
    </div>
  );
};

export default HWWSection;
