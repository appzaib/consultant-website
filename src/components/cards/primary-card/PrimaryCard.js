import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";

import ReadMoreBtn from "@components/read-more-btn";

import WebDevImage from "@assets/web-dev.webp";
import WebDevImage2 from "@assets/web-dev-2.png";

import stl from "./PrimaryCard.module.scss";

const PrimaryCard = ({
  imgSrc,
  imgSrc2,
  imgAlt,
  imgAlt2,
  heading,
  description,
  list,
  btnText,
  link,
  customClass,
}) => {
  return (
    <div className={clsx(stl.primaryCard, customClass)}>
      <div className={stl.cardFront}>
        <Image
          priority={true}
          src={imgSrc}
          height={100}
          width={100}
          alt={imgAlt}
          className={stl.img}
        />
        <div className={stl.content}>
          <p className={stl.heading}>{heading}</p>
          <p className={stl.desc}>{description}</p>
        </div>
      </div>
      <div className={stl.cardBack}>
        <Image
          src={imgSrc2}
          width={100}
          height={100}
          alt={imgAlt2}
          className={stl.img}
        />
        <ul className={stl.list}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ReadMoreBtn />
      </div>
    </div>
  );
};

PrimaryCard.defaultProps = {
  imgSrc: `${WebDevImage.src}`,
  imgSrc2: `${WebDevImage2.src}`,
  imgAlt: "Web Dev Image",
  imgAlt2: "Web Dev Image2",
  heading: "Web Development",
  description:
    "Fugiat laborum pariatur laborum est. Fugiat ullamco esse sunt commodo eu adipisicing sint dolore elit est dolor. Minim nisi reprehenderit ex ut ea ipsum excepteur exercitation laborum nostrud tempor dolore. Est duis proident aute minim ullamco dolore aute eiusmod veniam tempor aliqua deserunt sit.",
  list: [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
};

PrimaryCard.propTypes = {
  imgSrc: PropTypes.string,
  imgSrc2: PropTypes.string,
  imgAlt: PropTypes.string,
  imgAlt2: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
  btnText: PropTypes.string,
  link: PropTypes.string,
  customClass: PropTypes.string,
};

export default PrimaryCard;
