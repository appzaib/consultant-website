import { useState } from "react";
import { motion } from "framer-motion";

import PrimaryCard from "@components/cards/primary-card";
import Slider from "@components/slider";
import CaseStudyCard from "@components/cards/case-study-card";
import ReadMoreBtn from "@components/read-more-btn";
import Card from "@components/cards/card";
import Intro from "@components/intro";
import CareersSection from "@components/careers-sections/upper-section";

import stl from "./Homepage.module.scss";

const Homepage = () => {
  const [animateSkillBtn, setAnimateSkillBtn] = useState(false);
  const [animateReviewText, setAnimateReviewText] = useState(false);
  const [animateCaseStudyBtn, setAnimateCaseStudyBtn] = useState(false);
  const [animateHowWeWorkText, setAnimateHowWeWorkText] = useState(false);
  const [animateHowWeWorkBtn, setAnimateHowWeWorkBtn] = useState(false);
  const [animateBriefInfo, setAnimateBriefInfo] = useState(false);
  const [animateCareersBtn, setAnimateCareersBtn] = useState(false);

  const skillCardArray = [
    <PrimaryCard key={1} />,
    <PrimaryCard key={2} transitionDelay={0.1} />,
    <PrimaryCard key={3} transitionDelay={0.2} />,
    <PrimaryCard key={4} transitionDelay={0.3} />,
  ];

  const cardArray = [
    <Card key={1} width="350px" />,
    <Card key={2} transitionDelay={0.1} width="350px" />,
    <Card key={3} transitionDelay={0.2} width="350px" />,
    <Card key={4} transitionDelay={0.3} width="350px" />,
  ];

  const caseStudyCardArray = [
    <CaseStudyCard key={1} width="370px" />,
    <CaseStudyCard key={2} transitionDelay={0.2} width="370px" />,
    <CaseStudyCard key={3} transitionDelay={0.4} width="370px" />,
  ];

  const briefInfo = [
    { num: 10, name: "Lorem" },
    { num: 10, name: "Lorem" },
    { num: 10, name: "Lorem" },
  ];

  return (
    <div className={stl.home}>
      <Intro />
      <motion.div id="skills" className={stl.skills}>
        <h1 className={stl.heading}>
          IT Development Services and Skills for Your Needs
        </h1>
        <div className={stl.container}>
          {skillCardArray.map((card) => card)}
        </div>
        <motion.div
          onViewportEnter={() => setAnimateSkillBtn(true)}
          initial={{ display: "none", scale: 0, opacity: 0 }}
          animate={{
            display: animateSkillBtn ? "flex" : "none",
            scale: animateSkillBtn ? 1 : 0,
            opacity: animateSkillBtn ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
      </motion.div>
      <motion.div
        onViewportEnter={() => setAnimateReviewText(true)}
        className={stl.reviewContainer}
      >
        <motion.div
          initial={{ display: "none", x: -1000, opacity: 0 }}
          animate={{
            display: animateReviewText ? "flex" : "none",
            x: animateReviewText ? 0 : 1000,
            opacity: animateReviewText ? 1 : 0,
          }}
          className={stl.text}
        >
          <h1 className={stl.heading}>What customers are saying about us?</h1>
          <p className={stl.desc}>
            We're very pleased with all the positive feedback we've received
            over the years. Thank you to all of our clients across the globe who
            continue to put their faith in us.
          </p>
        </motion.div>
        <Slider />
      </motion.div>
      <div className={stl.caseStudy}>
        <h1 className={stl.title}>Case Studies</h1>
        <motion.div id="caseStudyCont" className={stl.container}>
          {caseStudyCardArray.map((card) => card)}
        </motion.div>
        <motion.div
          onViewportEnter={() => setAnimateCaseStudyBtn(true)}
          initial={{ display: "none", scale: 0, opacity: 0 }}
          animate={{
            display: animateCaseStudyBtn ? "flex" : "none",
            scale: animateCaseStudyBtn ? 1 : 0,
            opacity: animateCaseStudyBtn ? 1 : 0,
          }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
      </div>
      <motion.div
        onViewportEnter={() => setAnimateHowWeWorkText(true)}
        className={stl.how_we_work}
      >
        <motion.h1
          initial={{ display: "none", x: 1000, opacity: 0 }}
          animate={{
            display: animateHowWeWorkText ? "block" : "none",
            x: animateHowWeWorkText ? 0 : 1000,
            opacity: animateHowWeWorkText ? 1 : 0,
          }}
          className={stl.title}
        >
          Discover How We Deliver Your Products
        </motion.h1>
        <motion.p
          initial={{ display: "none", x: 1000, opacity: 0 }}
          animate={{
            display: animateHowWeWorkText ? "block" : "none",
            x: animateHowWeWorkText ? 0 : 1000,
            opacity: animateHowWeWorkText ? 1 : 0,
          }}
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
        <motion.div className={stl.cardContainer}>
          {cardArray.map((card) => card)}
        </motion.div>
        <motion.div
          onViewportEnter={() => setAnimateHowWeWorkBtn(true)}
          initial={{ display: "none", scale: 0, opacity: 0 }}
          animate={{
            display: animateHowWeWorkBtn ? "flex" : "none",
            scale: animateHowWeWorkBtn ? 1 : 0,
            opacity: animateHowWeWorkBtn ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
        <motion.p
          onViewportEnter={() => setAnimateBriefInfo(true)}
          className={stl.description}
        >
          {briefInfo.map((item, i) => (
            <motion.span
              initial={{ display: "none", opacity: 0, y: 100 }}
              animate={{
                display: animateBriefInfo ? "flex" : "none",
                opacity: animateBriefInfo ? 1 : 0,
                y: animateBriefInfo ? 0 : 200,
              }}
              key={i}
              className={stl.descr}
            >
              <span className={stl.primary}>{item.num}</span>
              <span className={stl.secondary}>{item.name}</span>
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
      <div className={stl.career}>
        <h1 className={stl.title}>We hire and nurture top talent!</h1>
        <CareersSection />
        <motion.div
          onViewportEnter={() => setAnimateCareersBtn(true)}
          initial={{ display: "none", scale: 0, opacity: 0 }}
          animate={{
            display: animateCareersBtn ? "flex" : "none",
            scale: animateCareersBtn ? 1 : 0,
            opacity: animateCareersBtn ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
