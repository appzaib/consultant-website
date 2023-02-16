import { useState } from "react";
import { motion } from "framer-motion";

import PrimaryCard from "@components/cards/primary-card";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./SkillsSection.module.scss";

const SkillsSection = () => {
  const [animateSkillBtn, setAnimateSkillBtn] = useState(false);

  const skillCardArray = [
    <PrimaryCard key={1} />,
    <PrimaryCard key={2} transitionDelay={0.1} />,
    <PrimaryCard key={3} transitionDelay={0.2} />,
    <PrimaryCard key={4} transitionDelay={0.3} />,
  ];

  return (
    <motion.div id="skills" className={stl.skillsSection}>
      <h1 className={stl.heading}>
        IT Development Services and Skills for Your Needs
      </h1>
      <div className={stl.container}>{skillCardArray.map((card) => card)}</div>
      <motion.div
        onViewportEnter={() => setAnimateSkillBtn(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: animateSkillBtn ? 1 : 0,
          scale: animateSkillBtn ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={stl.btnContainer}
      >
        <ReadMoreBtn link="/services.html" variant="secondary" />
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
