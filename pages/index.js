import { useState } from "react";

import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";

const Home = () => {
  const [progress, setProgress] = useState(0);

  setTimeout(() => {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }, 50);

  return (
    <main id="main">
      <ProgressBar progress={progress} />
      <Layout />
    </main>
  );
};

export default Home;
