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
      <div className={stl.text}>
        <h1 className={stl.heading}>All Blogs</h1>
        <p className={stl.desc}>
          Here you will find a wide range of articles and resources covering
          various topics. Our team of expert writers is dedicated to providing
          high-quality, informative, and engaging content on everything from
          technology and business to health and wellness. Whether you're looking
          for tips on how to improve your productivity, insights into the latest
          industry trends, or simply some inspiration to help you achieve your
          goals, you're sure to find something of interest in our All Blogs
          section. So sit back, relax, and explore the wealth of knowledge that
          we have to offer!
        </p>
      </div>
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
