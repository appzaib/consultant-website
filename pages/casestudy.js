import { useState } from "react";

import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import CaseStudyPage from "@components/casestudy-page";

const CaseStudy = () => {
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
    <main style={{ scrollBehavior: "smooth" }} id="main">
      <ProgressBar progress={progress} />
      <Layout
        contactCardHeading="Let's Discuss How We Can Help You Achieve Similar Results"
        child={<CaseStudyPage />}
      />
    </main>
  );
};

export default CaseStudy;
