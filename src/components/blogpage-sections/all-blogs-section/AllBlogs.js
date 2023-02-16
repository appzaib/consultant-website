import { motion } from "framer-motion";

import { categories, blogs } from "@components/data/blog-data";
import PrevIcon from "@assets/arrow-prev-circle.svg";
import NextIcon from "@assets/arrow-next-circle.svg";

import stl from "./AllBlogs.module.scss";

const AllBlogs = () => {
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
                onClick={() => (location.href = "/blog.html")}
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
