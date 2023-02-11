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
import ContactUsCard from "@components/cards/contact-us-card";

import stl from "./Footer.module.scss";

const Footer = ({ usefulLinks, showContactCard }) => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div className={stl.footerContainer} id="footer">
      {showContactCard && (
        <div className={stl.section}>
          <ContactUsCard customClass={stl.contCard} />
        </div>
      )}
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.footer}
      >
        <motion.div
          initial={{ display: "none", x: -500, opacity: 0 }}
          animate={{
            display: animation ? "flex" : "none",
            x: animation ? 0 : -500,
            opacity: animation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.section1}
        >
          <div onClick={() => console.log("Clicked...")} className={stl.logo}>
            <Logo />
          </div>
          <span
            onClick={() => console.log("Clicked...")}
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
          <span onClick={() => console.log("Clicked...")} className={stl.email}>
            <MailIcon />
            support@company.com
          </span>
          <span className={stl.company}>Business Consultation &copy; 2023</span>
        </motion.div>
        <motion.div
          initial={{ display: "none", y: 500, opacity: 0 }}
          animate={{
            display: animation ? "flex" : "none",
            y: animation ? 0 : 500,
            opacity: animation ? 1 : 0,
          }}
          className={stl.section2}
        >
          {usefulLinks.map((item, i) => (
            <div key={i} className={stl.col}>
              <span
                onClick={() => console.log("Clicked...")}
                className={stl.head}
              >
                {item.name}
              </span>
              {item.childs.map((item, i) => (
                <span key={i} onClick={() => console.log("Clicked...")}>
                  {item.childName}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ display: "none", x: 500, opacity: 0 }}
          animate={{
            display: animation ? "flex" : "none",
            x: animation ? 0 : 500,
            opacity: animation ? 1 : 0,
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
              onClick={() => console.log("Clicked...")}
              className={clsx(stl.socialBtn, stl.btn1)}
            >
              <FacebookIcon2 className={stl.iconPrimary} />
              <FacebookIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
              className={clsx(stl.socialBtn, stl.btn2)}
            >
              <TwitterIcon2 className={stl.iconPrimary} />
              <TwitterIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
              className={clsx(stl.socialBtn, stl.btn3)}
            >
              <LinkedInIcon2 className={stl.iconPrimary} />
              <LinkedInIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
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
  showContactCard: true,
  usefulLinks: [
    {
      name: "Lorem",
      link: "",
      childs: [
        { childName: "Ipsum1.1", childLink: "" },
        { childName: "Ipsum1.2", childLink: "" },
        { childName: "Ipsum1.3", childLink: "" },
        { childName: "Ipsum1.4", childLink: "" },
        { childName: "Ipsum1.5", childLink: "" },
        { childName: "Ipsum1.6", childLink: "" },
        { childName: "Ipsum1.7", childLink: "" },
      ],
    },
    {
      name: "Lorem",
      link: "",
      childs: [
        { childName: "Ipsum2.1", childLink: "" },
        { childName: "Ipsum2.2", childLink: "" },
        { childName: "Ipsum2.3", childLink: "" },
        { childName: "Ipsum2.4", childLink: "" },
        { childName: "Ipsum2.5", childLink: "" },
        { childName: "Ipsum2.6", childLink: "" },
        { childName: "Ipsum2.7", childLink: "" },
      ],
    },
    {
      name: "Lorem",
      link: "",
      childs: [
        { childName: "Ipsum3.1", childLink: "" },
        { childName: "Ipsum3.2", childLink: "" },
        { childName: "Ipsum3.3", childLink: "" },
        { childName: "Ipsum3.4", childLink: "" },
        { childName: "Ipsum3.5", childLink: "" },
        { childName: "Ipsum3.6", childLink: "" },
        { childName: "Ipsum3.7", childLink: "" },
      ],
    },
  ],
};

Footer.propTypes = {
  showContactCard: PropTypes.bool,
  usefulLinks: PropTypes.array,
};

export default Footer;
