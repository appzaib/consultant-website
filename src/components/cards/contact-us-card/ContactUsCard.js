import clsx from "clsx";
import PropTypes from "prop-types";

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
  return (
    <div className={clsx(stl.contCardContainer, customClass)}>
      <div style={{ width: width, height: height }} className={stl.contactCard}>
        <h1 className={stl.heading}>{heading}</h1>
        {desc && <p className={stl.desc}>{desc}</p>}
        <div className={stl.btnContainer}>
          <button onClick={() => console.log("Clicked...")} className={stl.btn}>
            {icon} {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

ContactUsCard.defaultProps = {
  heading: "Start a Project With Us",
  desc: "Sunt excepteur sit aliqua aliqua. Ut qui reprehenderit ipsum id sint esse et esse pariatur ex occaecat elit in. Amet cillum occaecat laborum dolor duis consectetur. Aliqua est irure ex reprehenderit sit enim enim nulla nostrud officia sunt eu anim culpa.",
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
