import { useState } from "react";
import { motion } from "framer-motion";

import ReadMoreBtn from "@components/read-more-btn";
import skillCardArray from "@components/data/skill-card-data";

import stl from "./SkillsSection.module.scss";

const SkillsSection = () => {
  const [animateSkillBtn, setAnimateSkillBtn] = useState(false);

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
