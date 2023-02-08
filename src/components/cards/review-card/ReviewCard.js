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
  return (
    <div
      onClick={() => (location.href = "/reviews1")}
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
          <span id="1" className={reviewRating >= 1 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="2" className={reviewRating >= 2 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="3" className={reviewRating >= 3 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="4" className={reviewRating >= 4 ? stl.active : undefined}>
            <Star />
          </span>
          <span id="5" className={reviewRating >= 5 ? stl.active : undefined}>
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
