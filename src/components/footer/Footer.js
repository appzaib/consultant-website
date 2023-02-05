import PropTypes from "prop-types";

import Logo from "@assets/logo.svg";
import LocationIcon from "@assets/location.svg";
import PhoneIcon from "@assets/phone.svg";
import MailIcon from "@assets/mail.svg";
import FacebookIcon from "@assets/facebook.svg";
import TwitterIcon from "@assets/twitter.svg";
import LinkedInIcon from "@assets/linkedIn.svg";
import GithubIcon from "@assets/github.svg";

import stl from "./Footer.module.scss";

const Footer = ({
  usefulLinkTitle1,
  usefulLinks1,
  usefulLinkTitle2,
  usefulLinks2,
  usefulLinkTitle3,
  usefulLinks3,
}) => {
  return (
    <div className={stl.footerContainer}>
      <div className={stl.section}>
        <div className={stl.content}>
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
      <div className={stl.footer}>
        <div className={stl.section1}>
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
        </div>
        <div className={stl.section2}>
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
        </div>
        <div className={stl.section3}>
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
              className={stl.socialBtn}
            >
              <FacebookIcon />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(twitterLink);
              }}
              className={stl.socialBtn}
            >
              <TwitterIcon />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(linkedInLink);
              }}
              className={stl.socialBtn}
            >
              <LinkedInIcon />
            </button>
            <button
              onClick={() => {
                console.log("Clicked...");
                //   window.open(githubLink);
              }}
              className={stl.socialBtn}
            >
              <GithubIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
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
