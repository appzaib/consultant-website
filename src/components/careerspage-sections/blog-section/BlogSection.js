import Slider from "@components/slider";
import BlogCard from "@components/cards/blog-card";

import stl from "./BlogSection.module.scss";

const BlogSection = () => {
  let blogCards = [];
  for (let i = 0; i < 15; i++) {
    blogCards.push(<BlogCard key={i} />);
  }

  return (
    <div className={stl.blogSection}>
      <h1 className={stl.heading}>
        Elit tempor aute id qui irure eiusmod mollit.
      </h1>
      <Slider height="70vh" content={blogCards} />
    </div>
  );
};

export default BlogSection;
