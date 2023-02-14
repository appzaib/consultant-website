import Intro from "@components/intro";
import NewBlogSection from "@components/blogpage-sections/new-blogs-section";
import AllBlogs from "@components/blogpage-sections/all-blogs-section";
import Subscription from "@components/blogpage-sections/subscription-section";

import stl from "./BlogPage.module.scss";

const BlogPage = () => {
  return (
    <div className={stl.blogPage}>
      <Intro />
      <NewBlogSection />
      <div className={stl.divider} />
      <AllBlogs />
      <div className={stl.divider} />
      <Subscription />
    </div>
  );
};

export default BlogPage;
