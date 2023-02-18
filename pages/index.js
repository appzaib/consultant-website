import { useState } from "react";

import CustomHead from "@components/head";
import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import ScrollToTop from "@components/scroll-to-top";

const Home = () => {
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
      <CustomHead />
      <main id="main" style={{ scrollBehavior: "smooth" }}>
        <ScrollToTop />
        <ProgressBar progress={progress} />
        <Layout />
      </main>
    </>
  );
};

export default Home;
