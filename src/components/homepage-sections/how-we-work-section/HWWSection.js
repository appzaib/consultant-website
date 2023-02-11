import { useState } from "react";
import { motion } from "framer-motion";

import Card from "@components/cards/card";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./HWWSection.module.scss";

const HWWSection = () => {
  const [textAnimation, setTextAnimation] = useState(false);
  const [btnAnimation, setBtnAnimation] = useState(false);
  const [briefInfoAnimation, setBreifInfoAnimation] = useState(false);

  const cardArray = [
    <Card key={1} width="350px" />,
    <Card key={2} transitionDelay={0.1} width="350px" />,
    <Card key={3} transitionDelay={0.2} width="350px" />,
    <Card key={4} transitionDelay={0.3} width="350px" />,
  ];

  const briefInfo = [
    { num: 10, name: "Lorem" },
    { num: 10, name: "Lorem" },
    { num: 10, name: "Lorem" },
  ];

  return (
    <div className={stl.hwwSection}>
      <motion.div
        onViewportEnter={() => setTextAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ display: "none", x: 1000, opacity: 0 }}
          animate={{
            display: textAnimation ? "block" : "none",
            x: textAnimation ? 0 : 1000,
            opacity: textAnimation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.title}
        >
          Discover How We Deliver Your Products
        </motion.h1>
        <motion.p
          initial={{ display: "none", x: 1000, opacity: 0 }}
          animate={{
            display: textAnimation ? "block" : "none",
            x: textAnimation ? 0 : 1000,
            opacity: textAnimation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          Adipisicing anim cillum ad do magna non mollit. Mollit cillum nisi
          eiusmod exercitation fugiat fugiat anim ea eu excepteur culpa est nisi
          labore. Veniam id ex elit Lorem nostrud ex velit ut sunt voluptate
          amet veniam. Consequat fugiat qui sit qui nulla exercitation proident
          consequat enim aliquip. Eu duis Lorem amet enim nisi ad ex incididunt
          officia excepteur Lorem magna et eu. Irure tempor sit deserunt dolore
          id aliqua.
        </motion.p>
      </motion.div>
      <motion.div className={stl.cardContainer}>
        {cardArray.map((card) => card)}
      </motion.div>
      <motion.p
        onViewportEnter={() => setBreifInfoAnimation(true)}
        className={stl.description}
      >
        {briefInfo.map((item, i) => (
          <motion.span
            initial={{ display: "none", opacity: 0, y: 200 }}
            animate={{
              display: briefInfoAnimation ? "flex" : "none",
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
        <ReadMoreBtn variant="secondary" />
      </motion.div>
    </div>
  );
};

export default HWWSection;
