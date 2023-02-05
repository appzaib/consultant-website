import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import ProfilePic from "@assets/profile-pic.jpg";
import Star from "@assets/star.svg";

import stl from "./ReviewCard.module.scss";

const ReviewCard = ({
  imgSrc,
  imgAlt,
  reviewRating,
  content,
  info,
  customClass,
}) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  useEffect(() => {
    if (reviewRating === 1) {
      setShow1(true);
    } else if (reviewRating === 2) {
      setShow1(true);
      setShow2(true);
    } else if (reviewRating === 3) {
      setShow1(true);
      setShow2(true);
      setShow3(true);
    } else if (reviewRating === 4) {
      setShow1(true);
      setShow2(true);
      setShow3(true);
      setShow4(true);
    } else if (reviewRating === 5) {
      setShow1(true);
      setShow2(true);
      setShow3(true);
      setShow4(true);
      setShow5(true);
    }
  }, [reviewRating]);

  return (
    <div
      onClick={(e) => (location.href = "/reviews1")}
      id="card"
      className={clsx(stl.reviewCard, customClass)}
    >
      <div className={stl.imgContainer}>
        <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={imgAlt}
          className={stl.img}
        />
      </div>
      <div className={stl.reviewStars}>
        <span className={stl.num}>{reviewRating}</span>
        <span id="stars" className={stl.stars}>
          <span id="1" className={show1 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="2" className={show2 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="3" className={show3 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="4" className={show4 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="5" className={show5 ? stl.active : undefined}>
            <Star />
          </span>
        </span>
      </div>
      <div className={stl.content}>{`" ${content} "`}</div>
      <div className={stl.info}>{info}</div>
    </div>
  );
};

ReviewCard.defaultProps = {
  imgSrc: ProfilePic.src,
  imgAlt: "Profile Pic",
  reviewRating: 5,
  content:
    "Qui dolore incididunt ad nisi sit sint aliquip do laborum in ut cupidatat nostrud Lorem.Do exercitation commodo ipsum incididunt.",
  info: "Department Head, Liquid Crystal Glazing Co.",
};

ReviewCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  reviewRating: PropTypes.number,
  content: PropTypes.string,
  info: PropTypes.string,
};

export default ReviewCard;
