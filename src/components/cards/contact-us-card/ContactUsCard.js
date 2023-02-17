import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import PhoneIcon from "@assets/phone.svg";

import stl from "./ContactUsCard.module.scss";

const ContactUsCard = ({
  width,
  height,
  heading,
  desc,
  btnText,
  icon,
  customClass,
}) => {
  const [animation, setAnimation] = useState(false);

  console.log(heading);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.contCardContainer, customClass)}
    >
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{
          opacity: animation ? 1 : 0,
          y: animation ? 0 : 300,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ width: width, height: height }}
        className={stl.contactCard}
      >
        <h1 className={stl.heading}>{heading}</h1>
        {desc && <p className={stl.desc}>{desc}</p>}
        <div className={stl.btnContainer}>
          <button
            onClick={() => (location.href = "/contact.html")}
            className={stl.btn}
          >
            {icon} {btnText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

ContactUsCard.defaultProps = {
  heading: "Start a Project With Us",
  btnText: "Contact Us",
  icon: <PhoneIcon />,
};

ContactUsCard.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  heading: PropTypes.string,
  desc: PropTypes.string,
  btnText: PropTypes.string,
  icon: PropTypes.node,
  customClass: PropTypes.string,
};

export default ContactUsCard;
