import { useState } from "react";
import { motion } from "framer-motion";

import CaseStudyCard from "@components/cards/case-study-card";

import stl from "./CaseStudySection.module.scss";

const CaseStudySection = () => {
  const [animation, setAnimation] = useState(false);

  let cases = [];
  for (let i = 0; i < 20; i++) cases.push(<CaseStudyCard key={i} />);

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
          Lorem Ipsum
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          Ad nisi nulla ad occaecat fugiat eu consectetur ea minim labore
          commodo. Eu consectetur magna nostrud adipisicing reprehenderit nisi
          eu fugiat aute qui nulla. Id excepteur adipisicing ad incididunt nulla
          sint sit labore do do sunt. Ex laborum anim quis consectetur dolore
          culpa adipisicing et.
        </motion.p>
      </motion.div>
      <div className={stl.container}>{cases.map((item) => item)}</div>
    </div>
  );
};

export default CaseStudySection;
