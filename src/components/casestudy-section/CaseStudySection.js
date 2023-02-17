import { useState } from "react";
import { motion } from "framer-motion";

import { cases } from "@components/data/case-study-data";

import stl from "./CaseStudySection.module.scss";

const CaseStudySection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.caseStudySec}>
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.title}
        >
          In-Depth Client Examples
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          Our Case Study section provides detailed examples of our work with
          clients from a variety of industries, showcasing our expertise and
          ability to deliver results. Through these in-depth case studies, you
          can see how we have helped businesses overcome challenges and achieve
          success with tailored solutions and innovative strategies. Our team
          works closely with each client to understand their unique needs and
          goals, and we pride ourselves on delivering tangible outcomes that
          drive growth and impact. Explore our featured case studies to see our
          work in action.
        </motion.p>
      </motion.div>
      <div className={stl.container}>{cases.map((item) => item)}</div>
    </div>
  );
};

export default CaseStudySection;
