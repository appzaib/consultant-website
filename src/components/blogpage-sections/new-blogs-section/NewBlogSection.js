import BlogCard from "@components/cards/blog-card";

import stl from "./NewBlogSection.module.scss";

const NewBlogSection = () => (
  <div className={stl.newBlogSec}>
    <div className={stl.text}>
      <h1 className={stl.heading}>New Blogs</h1>
      <p className={stl.desc}>
        Welcome to our New Blogs section, where you'll find a collection of the
        latest and most insightful articles on a variety of topics. Our team of
        expert writers covers everything from the latest trends in technology
        and business to tips for improving your personal wellbeing and
        relationships. We strive to provide our readers with valuable and
        informative content that they can apply to their everyday lives. Whether
        you're looking to stay up-to-date on the latest news and trends or just
        need some inspiration, our New Blogs section is the perfect place to
        start. So, grab a cup of coffee and start exploring the latest and
        greatest in our blogosphere!
      </p>
    </div>
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
