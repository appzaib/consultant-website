import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import ReadMoreBtn from "@components/read-more-btn";

import ProjectImage from "@assets/project.png";

import stl from "./ProjectShowcase.module.scss";

const ProjectShowcase = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.deliveredProj}
    >
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : -1000 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.left}
      >
        <div className={stl.projectAbout}>
          <h1 className={stl.projectName}>Lorem Ipsum</h1>
          <p className={stl.projectDesc}>
            Amet mollit quis sint dolore occaecat eu. Quis ea duis reprehenderit
            ex ut magna voluptate tempor incididunt aliqua. Nisi magna pariatur
            laboris duis sit laborum magna adipisicing cillum in. Proident
            aliqua fugiat est elit.
          </p>
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn variant="secondary" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.right}
      >
        <Image
          src={`${ProjectImage.src}`}
          width={100}
          height={100}
          alt="project-iamge"
          className={stl.img}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectShowcase;
