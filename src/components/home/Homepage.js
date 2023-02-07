import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PrimaryCard from "@components/cards/primary-card";
import Slider from "@components/slider";
import CaseStudyCard from "@components/cards/case-study-card";
import ReadMoreBtn from "@components/read-more-btn";
import Card from "@components/cards/card";

import BGImage from "@assets/consulting.jpg";
import CareerImage from "@assets/career.jpeg";
import ArrowNext from "@assets/arrow-right-2.svg";

import stl from "./Homepage.module.scss";

const Homepage = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [skillCardDelay, setSkillCardDelay] = useState(false);
  const [animateSkillBtn, setAnimateSkillBtn] = useState(false);
  const [animateReviewText, setAnimateReviewText] = useState(false);
  const [animateCaseStudyBtn, setAnimateCaseStudyBtn] = useState(false);
  const [animateHowWeWorkText, setAnimateHowWeWorkText] = useState(false);
  const [animateHowWeWorkBtn, setAnimateHowWeWorkBtn] = useState(false);
  const [animateCareersBtn, setAnimateCareersBtn] = useState(false);
  const [animateCareersContent, setAnimateCareersContent] = useState(false);

  const handleSkillCard = () => {
    setSkillCardDelay(true);

    setTimeout(() => {
      setSkillCardDelay(false);
    }, 500);
  };

  const handleSkillBtn = () => {
    setAnimateSkillBtn(true);
  };

  const handleReviewContent = () => {
    setAnimateReviewText(true);
  };

  const handleCaseStudyBtn = () => {
    setAnimateCaseStudyBtn(true);
  };

  const handleHowWeWorkText = () => {
    setAnimateHowWeWorkText(true);
  };

  const handleHowWeWorkBtn = () => {
    setAnimateHowWeWorkBtn(true);
  };

  const handleCareersBtn = () => {
    setAnimateCareersBtn(true);
  };

  const handleCareersText = () => {
    setAnimateCareersContent(true);
  };

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

  return (
    <div className={stl.home}>
      <div className={stl.intro}>
        <Image
          src={`${BGImage.src}`}
          height={100}
          width={100}
          alt="Background Image"
          className={stl.bgImage}
        />
        <div className={stl.info}>
          <motion.h1
            initial={{ x: 1800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={stl.main}
          >
            World class design, agile delivery and product development
          </motion.h1>
          <motion.div
            initial={{ x: 1800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={stl.content}
          >
            200 experts who have served more than 500 international clients.
            Let's bring your idea to life!
          </motion.div>
          <div className={stl.btnContainer}>
            <motion.button
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onMouseOver={() => {
                setShowArrow(true);
              }}
              onMouseOut={() => {
                setShowArrow(false);
              }}
              onClick={() => {
                console.log("Clicked...");
                // location.href = "/contact-us";
              }}
            >
              Get in Touch{" "}
              {showArrow && (
                <span>
                  <ArrowNext />
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        onViewportEnter={handleSkillCard}
        id="skills"
        className={stl.skills}
      >
        <h1 className={stl.heading}>
          IT Development Services and Skills for Your Needs
        </h1>
        <div className={stl.container}>
          {skillCardArray.map((card) => {
            return card;
          })}
        </div>
        <motion.div
          onViewportEnter={handleSkillBtn}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
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
        onViewportEnter={handleReviewContent}
        className={stl.reviewContainer}
      >
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{
            x: animateReviewText ? 0 : 1000,
            opacity: animateReviewText ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
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
          {caseStudyCardArray.map((card) => {
            return card;
          })}
        </motion.div>
        <motion.div
          onViewportEnter={handleCaseStudyBtn}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: animateCaseStudyBtn ? 1 : 0,
            opacity: animateCaseStudyBtn ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
      </div>
      <motion.div
        onViewportEnter={handleHowWeWorkText}
        className={stl.how_we_work}
      >
        <motion.h1
          initial={{ x: 1000, opacity: 0 }}
          animate={{
            x: animateHowWeWorkText ? 0 : 1000,
            opacity: animateHowWeWorkText ? 1 : 0,
          }}
          className={stl.title}
        >
          Discover How We Deliver Your Products
        </motion.h1>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          animate={{
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
          {cardArray.map((card) => {
            return card;
          })}
        </motion.div>
        <motion.div
          onViewportEnter={handleHowWeWorkBtn}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: animateHowWeWorkBtn ? 1 : 0,
            opacity: animateHowWeWorkBtn ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className={stl.btnContainer}
        >
          <ReadMoreBtn variant="secondary" />
        </motion.div>
        <motion.p className={stl.description}>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
        </motion.p>
      </motion.div>
      <div className={stl.career}>
        <h1 className={stl.title}>We hire and nurture top talent!</h1>
        <motion.div
          onViewportEnter={handleCareersText}
          className={stl.container}
        >
          <motion.p
            initial={{ x: -500 }}
            animate={{ x: animateCareersContent ? 0 : -500 }}
            className={stl.desc}
          >
            Exercitation sint cillum exercitation eiusmod non fugiat dolor
            commodo culpa ea consectetur minim. Adipisicing amet laborum ea
            voluptate nulla amet nisi nulla nulla eu elit deserunt magna nulla.
            Nisi occaecat consequat proident proident nisi culpa excepteur
            commodo ex enim commodo.
          </motion.p>
          <motion.span
            initial={{ x: 500 }}
            animate={{ x: animateCareersContent ? 0 : 500 }}
          >
            <Image
              src={`${CareerImage.src}`}
              width={100}
              height={100}
              alt="career-image"
              className={stl.img}
            />
          </motion.span>
        </motion.div>
        <motion.div
          onViewportEnter={handleCareersBtn}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
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
