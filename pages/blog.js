import { useState } from "react";

import CustomHead from "@components/head";
import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import BlogPage from "@components/blog-page";
import ScrollToTop from "@components/scroll-to-top";

const Blog = () => {
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }

  return (
    <>
      <CustomHead title="Codeline Consulting|Blog" />
      <main style={{ scrollBehavior: "smooth" }} id="main">
        <ScrollToTop />
        <ProgressBar progress={progress} />
        <Layout
          contactCardHeading="Contact Us for More Insights"
          child={<BlogPage />}
        />
      </main>
    </>
  );
};

export default Blog;
