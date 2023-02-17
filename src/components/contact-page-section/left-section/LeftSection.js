import { useState } from "react";
import { motion } from "framer-motion";

import EmailIcon from "@assets/mail.svg";
import PhoneIcon from "@assets/phone.svg";
import LocationIcon from "@assets/location.svg";
import FacebookIcon from "@assets/facebook-white.svg";
import GithubIcon from "@assets/github-white.svg";
import LinkedInIcon from "@assets/linkedIn-white.svg";
import TwitterIcon from "@assets/twitter-white.svg";

import stl from "./LeftSection.module.scss";

const LeftSection = () => {
  const [animationLeft, setAnimationLeft] = useState(false);
  const [animationSocialBtn, setAnimationSocialBtn] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimationLeft(true)}
      className={stl.left}
    >
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate={{
          opacity: animationLeft ? 1 : 0,
          x: animationLeft ? 0 : -1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.text}
      >
        <h1 className={stl.heading}>Let's talk</h1>
        <p className={stl.desc}>
          We're always excited to hear from new and existing clients. If you
          have any questions or would like to discuss a potential project,
          please fill out the contact form below and one of our team members
          will get back to you as soon as possible. You can also find our phone
          number and email address below if you prefer to contact us directly.
          We look forward to hearing from you!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate={{
          opacity: animationLeft ? 1 : 0,
          x: animationLeft ? 0 : -1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.contactOpt}
      >
        <button
          onClick={() => (location.href = "mailto:support@company.com")}
          className={stl.emailBtn}
        >
          <EmailIcon />
          Write us an Email
        </button>
        <button onClick={() => (location.href = "#")} className={stl.phoneBtn}>
          <PhoneIcon />
          Call us
        </button>
        <button
          onClick={() => (location.href = "#")}
          className={stl.locationBtn}
        >
          <LocationIcon />
          Find us on Map
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate={{
          opacity: animationLeft ? 1 : 0,
          x: animationLeft ? 0 : -1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className={stl.social}
      >
        <div className={stl.text}>
          <h2 className={stl.desc}>Connect with us on social</h2>
        </div>
        <motion.div
          onViewportEnter={() => setAnimationSocialBtn(true)}
          className={stl.btnContainer}
        >
          <motion.button
            initial={{ opacity: 0, y: 500 }}
            animate={{
              opacity: animationSocialBtn ? 1 : 0,
              y: animationSocialBtn ? 0 : 500,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            onClick={() => (location.href = "#")}
            className={stl.socialBtn}
          >
            <FacebookIcon />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 500 }}
            animate={{
              opacity: animationSocialBtn ? 1 : 0,
              y: animationSocialBtn ? 0 : 500,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            onClick={() => (location.href = "#")}
            className={stl.socialBtn}
          >
            <GithubIcon />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 500 }}
            animate={{
              opacity: animationSocialBtn ? 1 : 0,
              y: animationSocialBtn ? 0 : 500,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            onClick={() => (location.href = "#")}
            className={stl.socialBtn}
          >
            <LinkedInIcon />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 500 }}
            animate={{
              opacity: animationSocialBtn ? 1 : 0,
              y: animationSocialBtn ? 0 : 500,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            onClick={() => (location.href = "#")}
            className={stl.socialBtn}
          >
            <TwitterIcon />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSection;
