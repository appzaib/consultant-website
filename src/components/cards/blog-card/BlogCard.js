import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import BlogImage from "@assets/blog.jpg";

import stl from "./BlogCard.module.scss";
import { useState } from "react";

const BlogCard = ({ imgSrc, tag, date, title, author, link, customClass }) => {
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
        onClick={() => console.log("Clicked...")}
        className={stl.card}
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
            <span className={stl.tag}>{tag}</span>
            <div className={stl.date}>{date}</div>
          </div>
          <h1 className={stl.blogTitle}>{title}</h1>
          <div className={stl.blogAuthor}>by {author}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

BlogCard.defaultProps = {
  imgSrc: `${BlogImage.src}`,
  tag: "Ipsum",
  date: "01/01/10",
  title: "Qui duis Lorem nulla ullamco excepteur sit labore.",
  author: "John Doe",
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string,
  tag: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
  customClass: PropTypes.string,
};

export default BlogCard;
