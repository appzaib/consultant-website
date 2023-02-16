import { useState } from "react";
import { motion } from "framer-motion";

import EmailIcon from "@assets/mail.svg";
import PhoneIcon from "@assets/phone.svg";
import LocationIcon from "@assets/location.svg";
import FacebookIcon from "@assets/facebook-white.svg";
import GithubIcon from "@assets/github-white.svg";
import LinkedInIcon from "@assets/linkedIn-white.svg";
import TwitterIcon from "@assets/twitter-white.svg";
import SendIcon from "@assets/send.svg";

import stl from "./ContactPage.module.scss";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [animationLeft, setAnimationLeft] = useState(false);
  const [animationRight, setAnimationRight] = useState(false);
  const [animationSocialBtn, setAnimationSocialBtn] = useState(false);

  // console.log(name, "name");
  // console.log(email, "email");
  // console.log(msg, "msg");

  return (
    <div className={stl.contactPage}>
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
            Officia ad cupidatat ea proident elit exercitation cupidatat. Esse
            deserunt id laborum ipsum nulla dolore. Et est nisi et officia
            adipisicing ipsum et. Reprehenderit tempor irure laboris eiusmod et
            anim aliqua non occaecat Lorem ipsum. Ex Lorem reprehenderit
            exercitation ea in cupidatat ipsum do.
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
          <button
            onClick={() => (location.href = "#")}
            className={stl.phoneBtn}
          >
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
      <motion.div
        onViewportEnter={() => setAnimationRight(true)}
        className={stl.right}
      >
        <motion.input
          initial={{ opacity: 0, x: 1000 }}
          animate={{
            opacity: animationRight ? 1 : 0,
            x: animationRight ? 0 : 1000,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className={stl.input}
        />
        <motion.input
          initial={{ opacity: 0, x: 1000 }}
          animate={{
            opacity: animationRight ? 1 : 0,
            x: animationRight ? 0 : 1000,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className={stl.input}
        />
        <motion.textarea
          initial={{ opacity: 0, x: 1000 }}
          animate={{
            opacity: animationRight ? 1 : 0,
            x: animationRight ? 0 : 1000,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          placeholder="Your Message..."
          onChange={(e) => setMsg(e.target.value)}
          className={stl.msg}
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: 500 }}
          animate={{
            opacity: animationRight ? 1 : 0,
            y: animationRight ? 0 : 500,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          onClick={() => (location.href = "#")}
          className={stl.submitBtn}
        >
          <SendIcon />
          Send
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContactPage;
