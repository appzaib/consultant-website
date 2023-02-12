import { motion } from "framer-motion";

import BlogCard from "@components/cards/blog-card";

import PrevIcon from "@assets/arrow-prev-circle.svg";
import NextIcon from "@assets/arrow-next-circle.svg";

import stl from "./AllBlogs.module.scss";

const AllBlogs = () => {
  let blogs = [];
  for (let i = 0; i < 30; i++) blogs.push(<BlogCard key={i} />);

  let categories = [];
  for (let i = 0; i < 10; i++) categories.push("Lorem Ipsum");

  const handlePrev = () => {
    const el = document.getElementById("container");
    const width = el.offsetWidth;
    el.scrollLeft -= width / 3;
  };

  const handleNext = () => {
    const el = document.getElementById("container");
    const width = el.offsetWidth;
    el.scrollLeft += width / 3;
  };

  return (
    <div className={stl.allBlogs}>
      <div className={stl.header}>
        <h1 className={stl.heading}>Categories</h1>
        <div className={stl.category}>
          <button onClick={handlePrev} className={stl.prevBtn}>
            <PrevIcon />
          </button>
          <div id="container" className={stl.container}>
            {categories.map((item, i) => (
              <motion.span
                key={i}
                onClick={() => console.log("Clicked...")}
                className={stl.label}
              >
                {item}
              </motion.span>
            ))}
          </div>
          <button onClick={handleNext} className={stl.nextBtn}>
            <NextIcon />
          </button>
        </div>
      </div>
      <div className={stl.blogs}>{blogs.map((item) => item)}</div>
    </div>
  );
};

export default AllBlogs;
