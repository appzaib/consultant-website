import { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Logo from "@assets/logo.svg";
import LocationIcon from "@assets/location.svg";
import PhoneIcon from "@assets/phone.svg";
import MailIcon from "@assets/mail.svg";
import FacebookIcon from "@assets/facebook.svg";
import FacebookIcon2 from "@assets/facebook-2.svg";
import TwitterIcon from "@assets/twitter.svg";
import TwitterIcon2 from "@assets/twitter-2.svg";
import LinkedInIcon from "@assets/linkedIn.svg";
import LinkedInIcon2 from "@assets/linkedIn-2.svg";
import GithubIcon from "@assets/github.svg";
import GithubIcon2 from "@assets/github-2.svg";

import stl from "./Footer.module.scss";

const Footer = ({
  usefulLinkTitle1,
  usefulLinks1,
  usefulLinkTitle2,
  usefulLinks2,
  usefulLinkTitle3,
  usefulLinks3,
}) => {
  const [animateUpperFooter, setAnimateUpperFooter] = useState(false);
  const [animateLowerFooter, setAnimateLowerFooter] = useState(false);

  const handleUpperFooter = () => {
    setAnimateUpperFooter(true);
  };

  const handleLowerFooter = () => {
    setAnimateLowerFooter(true);
  };

  return (
    <motion.div
      onViewportEnter={handleUpperFooter}
      className={stl.footerContainer}
      id="footer"
    >
      <div className={stl.section}>
        <div
          className={clsx(
            stl.content,
            animateUpperFooter ? stl.animate : undefined
          )}
        >
          <h1 className={stl.heading}>Start a Project With Us</h1>
          <div className={stl.btnContainer}>
            <button
              onClick={() => {
                console.log("Clicked...");
                // location.href = "";
              }}
              className={stl.btn}
            >
              <PhoneIcon /> Contact Us
            </button>
          </div>
        </div>
      </div>
      <motion.div onViewportEnter={handleLowerFooter} className={stl.footer}>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: animateLowerFooter ? 0 : -500,
            opacity: animateLowerFooter ? 1 : 0,
          }}
          className={stl.section1}
        >
          <div
            onClick={() => {
              console.log("Clicked...");
              // location.href = "/";
            }}
            className={stl.logo}
          >
            <Logo />
          </div>
          <span
            onClick={() => {
              console.log("Clicked...");
            }}
            className={stl.location}
          >
            <LocationIcon />
            <span className={stl.address}>
              <span>Akshya Nagar 1st Block 1st Cross</span>
              <span>Rammurthy nagar</span> <span>Bangalore-560016</span>
            </span>
          </span>
          <span className={stl.contact}>
            <PhoneIcon />
            +1-202-555-0128
          </span>
          <span
            onClick={() => {
              console.log("Clicked...");
              // location.href = "mailto:support@company.com";
            }}
            className={stl.email}
          >
            <MailIcon />
            support@company.com
          </span>
          <span className={stl.company}>Business Consultation &copy; 2023</span>
        </motion.div>
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{
            y: animateLowerFooter ? 0 : 500,
            opacity: animateLowerFooter ? 1 : 0,
          }}
          className={stl.section2}
        >
          <div className={stl.col}>
            <span
              onClick={() => {
                console.log("Clicked...");
                location.href = "";
              }}
              className={stl.head}
            >
              {usefulLinkTitle1}
            </span>
            {usefulLinks1.map((item, i) => (
              <span
                key={i}
                onClick={() => {
                  console.log("Clicked...");
                  location.href = item.link;
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className={stl.col}>
            <span
              onClick={() => {
                console.log("Clicked...");
                location.href = "";
              }}
              className={stl.head}
            >
              {usefulLinkTitle2}
            </span>
            {usefulLinks2.map((item, i) => (
              <span
                key={i}
                onClick={() => {
                  console.log("Clicked...");
                  location.href = item.link;
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className={stl.col}>
            <span
              onClick={() => {
                console.log("Clicked...");
                location.href = "";
              }}
              className={stl.head}
            >
              {usefulLinkTitle3}
            </span>
            {usefulLinks3.map((item, i) => (
              <span
                key={i}
                onClick={() => {
                  console.log("Clicked...");
                  location.href = item.link;
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: animateLowerFooter ? 0 : 500,
            opacity: animateLowerFooter ? 1 : 0,
          }}
          className={stl.section3}
        >
          <h2 className={stl.heading}>About us</h2>
          <p className={stl.desc}>
            Ipsum ex nostrud in id sunt nostrud aute. Proident ipsum minim sint
            eu dolore ullamco reprehenderit ullamco velit fugiat. Aliqua irure
            velit nulla exercitation dolore proident consequat labore ad elit
            dolore ad est.
          </p>
          <div className={stl.social}>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(facebookLink);
              }}
              className={clsx(stl.socialBtn, stl.btn1)}
            >
              <FacebookIcon2 className={stl.iconPrimary} />
              <FacebookIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(twitterLink);
              }}
              className={clsx(stl.socialBtn, stl.btn2)}
            >
              <TwitterIcon2 className={stl.iconPrimary} />
              <TwitterIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(linkedInLink);
              }}
              className={clsx(stl.socialBtn, stl.btn3)}
            >
              <LinkedInIcon2 className={stl.iconPrimary} />
              <LinkedInIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(githubLink);
              }}
              className={clsx(stl.socialBtn, stl.btn4)}
            >
              <GithubIcon2 className={stl.iconPrimary} />
              <GithubIcon className={stl.iconSecondary} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

Footer.defaultProps = {
  usefulLinkTitle1: "Lorem",
  usefulLinkTitle2: "Lorem",
  usefulLinkTitle3: "Lorem",
  usefulLinks1: [
    { name: "Ipsum1.1", link: "" },
    { name: "Ipsum1.2", link: "" },
    { name: "Ipsum1.3", link: "" },
    { name: "Ipsum1.4", link: "" },
    { name: "Ipsum1.5", link: "" },
    { name: "Ipsum1.6", link: "" },
    { name: "Ipsum1.7", link: "" },
  ],
  usefulLinks2: [
    { name: "Ipsum2.1", link: "" },
    { name: "Ipsum2.2", link: "" },
    { name: "Ipsum2.3", link: "" },
    { name: "Ipsum2.4", link: "" },
    { name: "Ipsum2.5", link: "" },
    { name: "Ipsum2.6", link: "" },
    { name: "Ipsum2.7", link: "" },
  ],
  usefulLinks3: [
    { name: "Ipsum3.1", link: "" },
    { name: "Ipsum3.2", link: "" },
    { name: "Ipsum3.3", link: "" },
    { name: "Ipsum3.4", link: "" },
    { name: "Ipsum3.5", link: "" },
    { name: "Ipsum3.6", link: "" },
    { name: "Ipsum3.7", link: "" },
  ],
};

Footer.propTypes = {
  usefulLinkTitle1: PropTypes.string,
  usefulLinks1: PropTypes.array,
  usefulLinkTitle2: PropTypes.string,
  usefulLinks2: PropTypes.array,
  usefulLinkTitle3: PropTypes.string,
  usefulLinks3: PropTypes.array,
};

export default Footer;
