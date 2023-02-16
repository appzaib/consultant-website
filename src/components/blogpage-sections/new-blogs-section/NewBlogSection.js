import BlogCard from "@components/cards/blog-card";

import stl from "./NewBlogSection.module.scss";

const NewBlogSection = () => (
  <div className={stl.newBlogSec}>
    <h1 className={stl.heading}>New Blogs</h1>
    <div className={stl.firstRow}>
      <BlogCard
        title="Mastering Web Development: Tips and Insights for Success"
        big={true}
      />
      <BlogCard
        title="From Concept to Launch: A Guide to Building Your Dream Website"
        big={true}
      />
    </div>
    <div className={stl.secondRow}>
      <BlogCard title="The Art and Science of Web Development: Best Practices and Strategies" />
      <BlogCard title="Web Development Unlocked: Breaking Down the Basics and Beyond" />
      <BlogCard title="Innovative Web Development Solutions for Modern Businesses" />
      <BlogCard title="The Future of Web Development: Trends and Predictions to Watch" />
    </div>
  </div>
);

export default NewBlogSection;
