import BlogCard from "@components/cards/blog-card";

import stl from "./NewBlogSection.module.scss";

const NewBlogSection = () => (
  <div className={stl.newBlogSec}>
    <h1 className={stl.heading}>Lorem Ipusm</h1>
    <div className={stl.firstRow}>
      <BlogCard big={true} />
      <BlogCard big={true} />
    </div>
    <div className={stl.secondRow}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
);

export default NewBlogSection;
