import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import BlogImage from "@assets/blog.jpg";

import NextIcon from "@assets/arrow-right-long-2.svg";

import stl from "./BlogCard.module.scss";

const BlogCard = ({
  big,
  imgSrc,
  tags,
  date,
  title,
  author,
  link,
  customClass,
}) => {
  const [animation, setAnimation] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={clsx(stl.container, customClass)}
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: animation ? 1 : 0, y: animation ? 0 : 150 }}
        transition={{ type: "spring", stiffness: 50 }}
        onClick={() => (location.href = "#")}
        className={clsx(stl.card, big ? stl.big : undefined)}
      >
        <div className={stl.imgContainer}>
          <div
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            className={stl.blogImg}
          ></div>
        </div>
        <div className={stl.blogInfo}>
          <div className={stl.blogAbout}>
            {tags.map((tag, i) => (
              <span key={i} className={stl.tag}>
                {tag}
              </span>
            ))}
            <div className={stl.date}>{date}</div>
          </div>
          <h1 className={stl.blogTitle}>{title}</h1>
          <div className={stl.blogAuthor}>by {author}</div>
        </div>
        <div className={stl.iconContainer}>
          <span className={stl.icon}>
            <NextIcon />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

BlogCard.defaultProps = {
  imgSrc: `${BlogImage.src}`,
  tags: ["Ipsum"],
  date: "01/01/10",
  title: "Qui duis Lorem nulla ullamco excepteur sit labore.",
  author: "John Doe",
  big: false,
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string,
  tag: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
  big: PropTypes.bool,
  customClass: PropTypes.string,
};

export default BlogCard;
