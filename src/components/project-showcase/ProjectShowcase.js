import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ReadMoreBtn from "@components/read-more-btn";

import ProjectImage from "@assets/project.png";

import stl from "./ProjectShowcase.module.scss";

const ProjectShowcase = ({ title, desc, link, imgSrc, imgAlt }) => {
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
          <h1 className={stl.projectName}>{title}</h1>
          <p className={stl.projectDesc}>{desc}</p>
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn link={link} variant="secondary" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.right}
      >
        <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={imgAlt}
          className={stl.img}
        />
      </motion.div>
    </motion.div>
  );
};

ProjectShowcase.defaultProps = {
  title: "Lorem Ipsum",
  desc: "Est non cupidatat qui mollit nostrud sit in ut nostrud veniam occaecat et irure. Ullamco labore ullamco amet esse cupidatat do laborum nisi. Tempor commodo ipsum sit dolore quis velit qui mollit Lorem nisi cupidatat. Occaecat esse sint in aliqua officia esse. Ullamco velit et culpa fugiat nostrud anim. Consequat voluptate incididunt do cupidatat laboris ea laboris proident reprehenderit magna. Sit aute cillum deserunt consectetur esse irure velit pariatur deserunt amet tempor elit sit aliquip.",
  imgSrc: ProjectImage.src,
  imgAlt: "project-image",
};

ProjectShowcase.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default ProjectShowcase;
